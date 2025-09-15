'use client'

import {useState} from 'react';
import {motion} from 'motion/react';
import {BarChart3, Building, Edit, Eye, FileText, MessageSquare, Plus, Trash2, Users} from 'lucide-react';
import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Badge} from "@/components/ui/badge";

// Mock data for demonstration
const mockProjects = [
  { id: 1, title: "모던 레지던스", category: "주거", status: "완료", date: "2024.12.15" },
  { id: 2, title: "미니멀 오피스", category: "상업", status: "진행중", date: "2024.11.28" },
  { id: 3, title: "어반 컴플렉스", category: "복합", status: "완료", date: "2024.10.20" }
];

const mockNews = [
  { id: 1, title: "2024 한국건축문화대상 우수상 수상", category: "수상", views: 1250, date: "2024.12.15" },
  { id: 2, title: "신규 복합 건축 프로젝트 착공", category: "프로젝트", views: 890, date: "2024.11.28" },
  { id: 3, title: "TEDx Seoul 2024 연사 참여", category: "강연", views: 2150, date: "2024.10.20" }
];

const mockInquiries = [
  { id: 1, name: "김고객", company: "ABC기업", type: "상업건축", status: "새로운", date: "2024.12.20" },
  { id: 2, name: "박건축주", company: "개인", type: "주거건축", status: "답변완료", date: "2024.12.19" },
  { id: 3, name: "이개발", company: "XYZ개발", type: "복합건축", status: "진행중", date: "2024.12.18" }
];

const mockTeam = [
  { id: 1, name: "김건축", position: "대표 건축사", status: "활성" },
  { id: 2, name: "박설계", position: "수석 건축사", status: "활성" },
  { id: 3, name: "이디자인", position: "선임 건축사", status: "활성" }
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  // 로그인 처리 (데모용)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === "admin" && loginForm.password === "admin") {
      setIsLoggedIn(true);
    } else {
      alert("아이디: admin, 비밀번호: admin을 입력해주세요.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">관리자 로그인</CardTitle>
              <p className="text-muted-foreground">관리자 계정으로 로그인해주세요</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="username" className="block mb-2">아이디</label>
                  <Input
                    id="username"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                    placeholder="admin"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2">비밀번호</label>
                  <Input
                    id="password"
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    placeholder="admin"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">로그인</Button>
              </form>
              <div className="mt-4 p-3 bg-muted rounded text-sm text-center">
                <p><strong>데모 계정:</strong></p>
                <p>아이디: admin / 비밀번호: admin</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* 헤더 */}
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="text-3xl mb-2">관리자 대시보드</h1>
            <p className="text-muted-foreground">웹사이트 콘텐츠를 관리할 수 있습니다</p>
          </div>
          <Button
            onClick={() => setIsLoggedIn(false)}
            variant="outline"
          >
            로그아웃
          </Button>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              대시보드
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              프로젝트
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              뉴스
            </TabsTrigger>
            <TabsTrigger value="inquiries" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              문의관리
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              팀관리
            </TabsTrigger>
          </TabsList>

          {/* 대시보드 */}
          <TabsContent value="dashboard">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">총 프로젝트</p>
                      <p className="text-2xl">{mockProjects.length}</p>
                    </div>
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">뉴스 기사</p>
                      <p className="text-2xl">{mockNews.length}</p>
                    </div>
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">문의건수</p>
                      <p className="text-2xl">{mockInquiries.length}</p>
                    </div>
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">팀 구성원</p>
                      <p className="text-2xl">{mockTeam.length}</p>
                    </div>
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 최근 활동 */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>최근 문의</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockInquiries.slice(0, 3).map((inquiry) => (
                      <div key={inquiry.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{inquiry.name}</p>
                          <p className="text-sm text-muted-foreground">{inquiry.type}</p>
                        </div>
                        <Badge variant={inquiry.status === "새로운" ? "default" : "secondary"}>
                          {inquiry.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>인기 뉴스</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockNews.slice(0, 3).map((news) => (
                      <div key={news.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium line-clamp-1">{news.title}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Eye className="w-3 h-3" />
                            <span>{news.views.toLocaleString()}</span>
                          </div>
                        </div>
                        <Badge variant="outline">{news.category}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* 프로젝트 관리 */}
          <TabsContent value="projects">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>프로젝트 관리</CardTitle>
                    <Button className="flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      새 프로젝트
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockProjects.map((project) => (
                      <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">{project.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{project.category}</span>
                            <span>{project.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={project.status === "완료" ? "default" : "secondary"}>
                            {project.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* 뉴스 관리 */}
          <TabsContent value="news">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>뉴스 관리</CardTitle>
                    <Button className="flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      새 기사
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockNews.map((news) => (
                      <div key={news.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium line-clamp-1">{news.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{news.category}</span>
                            <span>{news.date}</span>
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              <span>{news.views.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* 문의 관리 */}
          <TabsContent value="inquiries">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>문의 관리</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockInquiries.map((inquiry) => (
                      <div key={inquiry.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">{inquiry.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{inquiry.company}</span>
                            <span>{inquiry.type}</span>
                            <span>{inquiry.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={inquiry.status === "새로운" ? "default" : "secondary"}>
                            {inquiry.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* 팀 관리 */}
          <TabsContent value="team">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>팀 관리</CardTitle>
                    <Button className="flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      팀원 추가
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockTeam.map((member) => (
                      <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.position}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="default">{member.status}</Badge>
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}