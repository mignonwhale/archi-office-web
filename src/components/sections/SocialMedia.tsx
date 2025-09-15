'use client'

import {motion} from 'motion/react';
import {socialLinks, instagramPosts} from "@/lib/data";
import {getSocialIcon, createSocialIconComponent} from "@/lib/icons";


export default function SocialMedia() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* 헤더 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4">소셜 미디어</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            다양한 채널을 통해 STUDIO ARCH의 일상과 프로젝트 소식을 만나보세요.
          </p>
        </motion.div>

        {/* 소셜 링크 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socialLinks.map((social, index) => {
            const socialIconData = getSocialIcon(social.iconName);
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-background rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  {createSocialIconComponent(socialIconData, "w-6 h-6 text-primary")}
                </div>
                <h3 className="mb-2 group-hover:text-primary transition-colors">
                  {social.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {social.handle}
                </p>
                <p className="text-xs text-muted-foreground">
                  {social.description}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Instagram 피드 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                {createSocialIconComponent(getSocialIcon("Instagram"), "w-4 h-4 text-white")}
              </div>
              <h3 className="text-2xl">Instagram 피드</h3>
            </div>
            <a
              href="https://instagram.com/studio_arch_official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              @studio_arch_official 팔로우
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <p className="text-xs line-clamp-2">{post.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}