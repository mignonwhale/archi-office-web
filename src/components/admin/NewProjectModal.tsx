'use client'

import { useState } from 'react'
import { Building, Calendar, MapPin, Upload, User, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import type { CreateProjectData } from '@/types'
import {supabase} from "@/lib/supabase";

/**
 * 프로젝트 카테고리 상수 배열
 * @constant {string[]}
 */
const PROJECT_CATEGORIES = [
  '주거',
  '상업',
  '공공',
  '복합',
  '리노베이션',
  '기타'
]

/**
 * 프로젝트 폼 데이터 인터페이스
 * @interface ProjectFormData
 * @extends {CreateProjectData}
 * @property {string} [longDescription] - 프로젝트 상세 설명
 * @property {string[]} [features] - 프로젝트 특징 목록
 * @property {File[]} [images] - 업로드할 이미지 파일 목록
 */
interface ProjectFormData extends CreateProjectData {
  longDescription?: string
  features?: string[]
  images?: File[]
}

/**
 * NewProjectModal 컴포넌트 Props 인터페이스
 * @interface NewProjectModalProps
 * @property {boolean} isOpen - 모달 열림/닫힘 상태
 * @property {() => void} onClose - 모달 닫기 콜백 함수
 * @property {() => void} [onSuccess] - 프로젝트 등록 성공 시 콜백 함수 (선택적)
 */
interface NewProjectModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

/**
 * 새 프로젝트 등록 모달 컴포넌트
 *
 * @component
 * @param {NewProjectModalProps} props - 컴포넌트 props
 * @returns {JSX.Element} 프로젝트 등록 모달 JSX 엘리먼트
 *
 * @description
 * 관리자가 새로운 포트폴리오 프로젝트를 등록할 수 있는 모달 컴포넌트입니다.
 *
 * @features
 * - 프로젝트 기본 정보 입력 (제목, 카테고리, 위치, 연도, 면적, 클라이언트)
 * - 간단한 설명 및 상세 설명 작성
 * - 동적 특징 태그 추가/제거
 * - 다중 이미지 업로드 및 미리보기
 * - 대표 프로젝트 설정
 * - 폼 유효성 검사 및 제출 상태 관리
 * - 자동 폼 리셋 및 모달 닫기
 *
 * @example
 * ```tsx
 * <NewProjectModal
 *   isOpen={isModalOpen}
 *   onClose={() => setIsModalOpen(false)}
 *   onSuccess={() => console.log('프로젝트 등록 완료!')}
 * />
 * ```
 */
export default function NewProjectModal({ isOpen, onClose, onSuccess }: NewProjectModalProps) {
  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    category: '주거',
    description: '',
    longDescription: '',
    location: '',
    year: new Date().getFullYear(),
    client: '',
    area: '',
    is_featured: false,
    features: [],
    images: [],
    status: '진행중'
  })
  const [newFeature, setNewFeature] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  /**
   * 폼 데이터의 특정 필드를 업데이트하는 핸들러
   * @param {keyof ProjectFormData} field - 업데이트할 필드명
   * @param {any} value - 새로운 값
   */
  const handleInputChange = (field: keyof ProjectFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  /**
   * 새로운 특징을 프로젝트 특징 목록에 추가
   * - 빈 문자열 및 중복 특징은 추가하지 않음
   * - 추가 후 입력 필드 초기화
   */
  const addFeature = () => {
    if (newFeature.trim() && !formData.features?.includes(newFeature.trim())) {
      setFormData(prev => ({
        ...prev,
        features: [...(prev.features || []), newFeature.trim()]
      }))
      setNewFeature('')
    }
  }

  /**
   * 특정 특징을 프로젝트 특징 목록에서 제거
   * @param {string} feature - 제거할 특징 문자열
   */
  const removeFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features?.filter(f => f !== feature) || []
    }))
  }

  /**
   * 이미지 파일 업로드 핸들러
   * - 여러 파일을 선택할 수 있으며 기존 이미지 목록에 추가됨
   * @param {React.ChangeEvent<HTMLInputElement>} e - 파일 입력 이벤트
   */
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData(prev => ({
      ...prev,
      images: [...(prev.images || []), ...files]
    }))
  }

  /**
   * 특정 인덱스의 이미지를 목록에서 제거
   * @param {number} index - 제거할 이미지의 인덱스
   */
  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images?.filter((_, i) => i !== index) || []
    }))
  }

  /**
   * 폼 데이터를 초기 상태로 리셋
   * - 모든 필드를 기본값으로 되돌림
   * - 새 특징 입력 필드도 초기화
   */
  const resetForm = () => {
    setFormData({
      title: '',
      category: '주거',
      description: '',
      longDescription: '',
      location: '',
      year: new Date().getFullYear(),
      client: '',
      area: '',
      is_featured: false,
      features: [],
      images: [],
      status: '진행중'
    })
    setNewFeature('')
  }

  /**
   * 모달 닫기 핸들러
   * - 폼 리셋 후 부모 컴포넌트의 onClose 콜백 실행
   */
  const handleClose = () => {
    resetForm()
    onClose()
  }

  /**
   * 프로젝트 등록 폼 제출 핸들러
   * @param {React.FormEvent} e - 폼 제출 이벤트
   * @returns {Promise<void>}
   *
   * @description
   * - 폼 데이터 유효성 검사
   * - 이미지 파일들을 Supabase Storage에 업로드
   * - projects 테이블에 프로젝트 데이터 저장
   * - project_images 테이블에 이미지 정보 저장
   * - 성공/실패에 따른 사용자 알림
   * - 성공 시 폼 리셋 및 모달 닫기
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log('프로젝트 등록 시작:', formData)

      // 익명 인증 (Storage 업로드를 위해 필요)
      const { data: authData, error: authError } = await supabase.auth.signInAnonymously()
      if (authError) {
        console.warn('익명 인증 실패:', authError)
        // 계속 진행 (일부 경우에는 익명 인증 없이도 작동할 수 있음)
      } else {
        console.log('익명 인증 성공:', authData)
      }

      // 1. 이미지 파일들을 Storage에 업로드
      const uploadedImageUrls: string[] = []

      if (formData.images && formData.images.length > 0) {
        for (let i = 0; i < formData.images.length; i++) {
          const file = formData.images[i]
          const timestamp = Date.now()
          const fileName = `${timestamp}_${i}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`

          console.log(`이미지 업로드 중 (${i + 1}/${formData.images.length}):`, fileName)

          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('project-images')
            .upload(fileName, file)

          if (uploadError) {
            console.error('이미지 업로드 오류:', uploadError)
            throw new Error(`이미지 업로드 실패: ${uploadError.message}`)
          }

          // 업로드된 파일의 공개 URL 생성
          const { data: { publicUrl } } = supabase.storage
            .from('project-images')
            .getPublicUrl(fileName)

          uploadedImageUrls.push(publicUrl)
          console.log('이미지 업로드 성공:', publicUrl)
        }
      }

      // 2. projects 테이블에 프로젝트 데이터 삽입
      const projectData = {
        title: formData.title,
        category: formData.category,
        description: formData.description || null,
        long_description: formData.longDescription || null,
        location: formData.location || null,
        year: formData.year || null,
        client: formData.client || null,
        area: formData.area || null,
        status: '진행중',
        features: formData.features || [],
        is_featured: formData.is_featured || false
      }

      console.log('프로젝트 데이터 삽입:', projectData)

      const { data: projectResult, error: projectError } = await supabase
        .from('projects')
        .insert([projectData])
        .select('id')
        .single()

      if (projectError) {
        console.error('프로젝트 삽입 오류:', projectError)
        throw new Error(`프로젝트 등록 실패: ${projectError.message}`)
      }

      const projectId = projectResult.id
      console.log('프로젝트 등록 성공, ID:', projectId)

      // 3. project_images 테이블에 이미지 정보 삽입
      if (uploadedImageUrls.length > 0) {
        const imageData = uploadedImageUrls.map((url, index) => ({
          project_id: projectId,
          image_url: url,
          alt_text: `${formData.title} 이미지 ${index + 1}`,
          sort_order: index + 1
        }))

        console.log('이미지 데이터 삽입:', imageData)

        const { error: imageError } = await supabase
          .from('project_images')
          .insert(imageData)

        if (imageError) {
          console.error('이미지 데이터 삽입 오류:', imageError)
          // 프로젝트는 이미 생성되었으므로 이미지 오류는 경고로 처리
          console.warn('이미지 정보 저장에 실패했지만 프로젝트는 등록되었습니다.')
        } else {
          console.log('이미지 정보 저장 성공')
        }
      }

      // 성공 시 알림 및 콜백 실행
      alert('프로젝트가 성공적으로 등록되었습니다!')
      resetForm()
      onClose()
      onSuccess?.()

    } catch (error) {
      console.error('프로젝트 등록 오류:', error)

      // 사용자에게 구체적인 오류 메시지 표시
      const errorMessage = error instanceof Error
        ? error.message
        : '프로젝트 등록 중 알 수 없는 오류가 발생했습니다.'

      alert(`오류: ${errorMessage}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>새 프로젝트 등록</DialogTitle>
          <DialogDescription>
            프로젝트 정보를 입력하여 포트폴리오에 추가하세요.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 기본 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">프로젝트명 *</label>
              <Input
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="예: 모던 레지던스"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">카테고리 *</label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleInputChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PROJECT_CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 위치 및 기본 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                위치
              </label>
              <Input
                value={formData.location || ''}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="예: 서울시 강남구"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                완공년도
              </label>
              <Input
                type="number"
                value={formData.year || ''}
                onChange={(e) => handleInputChange('year', parseInt(e.target.value))}
                placeholder="2024"
                min="2000"
                max="2030"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Building className="w-4 h-4" />
                면적
              </label>
              <Input
                value={formData.area || ''}
                onChange={(e) => handleInputChange('area', e.target.value)}
                placeholder="예: 240㎡"
              />
            </div>
          </div>

          {/* 클라이언트 정보 */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <User className="w-4 h-4" />
              클라이언트
            </label>
            <Input
              value={formData.client || ''}
              onChange={(e) => handleInputChange('client', e.target.value)}
              placeholder="예: 개인 주택, ABC기업"
            />
          </div>

          {/* 설명 */}
          <div className="space-y-2">
            <label className="text-sm font-medium">간단한 설명</label>
            <Textarea
              value={formData.description || ''}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="프로젝트의 핵심 특징을 한 줄로 요약해주세요"
              rows={2}
            />
          </div>

          {/* 상세 설명 */}
          <div className="space-y-2">
            <label className="text-sm font-medium">상세 설명</label>
            <Textarea
              value={formData.longDescription || ''}
              onChange={(e) => handleInputChange('longDescription', e.target.value)}
              placeholder="프로젝트의 배경, 설계 철학, 주요 특징 등을 자세히 설명해주세요"
              rows={4}
            />
          </div>

          {/* 특징 */}
          <div className="space-y-2">
            <label className="text-sm font-medium">주요 특징</label>
            <div className="flex gap-2">
              <Input
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                placeholder="특징을 입력하세요"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
              />
              <Button type="button" onClick={addFeature} variant="outline">
                추가
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.features?.map((feature, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {feature}
                  <button
                    type="button"
                    onClick={() => removeFeature(feature)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          {/* 이미지 업로드 */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Upload className="w-4 h-4" />
              이미지 업로드
            </label>
            <Input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
            />
            <div className="grid grid-cols-3 gap-2 mt-2">
              {formData.images?.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-20 object-cover rounded border"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-destructive text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 대표 프로젝트 여부 */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="featured"
              checked={formData.is_featured}
              onChange={(e) => handleInputChange('is_featured', e.target.checked)}
              className="rounded border-input"
            />
            <label htmlFor="featured" className="text-sm font-medium">
              대표 프로젝트로 설정
            </label>
          </div>
        </form>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
          >
            취소
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting || !formData.title.trim()}
          >
            {isSubmitting ? '등록 중...' : '프로젝트 등록'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}