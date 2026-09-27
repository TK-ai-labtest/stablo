"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// 1. ข้อมูลโปรไฟล์ผู้เขียน (Author Profile)
const authorData = {
  name: "Nitikarn Advisory",
  title: "Legal & Strategic CFO Partner",
  bio: "ถอดรหัสข้อพิพาททางปกครองและกฎหมายธุรกิจ สรุปข้อเท็จจริง คัดกรองความเสี่ยงสัญญา และวางเกราะป้องกันภาษีสำหรับผู้ประกอบการ",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
};

// 2. รายการบทความ (Mock Posts)
const archivePosts = [
  {
    _id: "post-1",
    title: "หวังดีแต่ไม่มีอำนาจ: เมื่อประกาศราคามันสำปะหลังไม่ชอบ เหตุไฉนศาลตัดสินไม่ละเมิด?",
    slug: "ultra-vires-cassava-case",
    category: "CASE STUDY: อุทาหรณ์คดีปกครอง",
    categoryColor: "text-amber-600 dark:text-amber-400",
    publishedAt: "ศาลปกครองสูงสุด อร. 120/2568",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    excerpt: "เรื่องเล่าลานมัน: เมื่อข้าราชการออกประกาศคุมเพดานหักสิ่งเจือปนไม่เกิน 10% แม้เป็นการกระทำเกินอำนาจ (Ultra Vires) แต่ศาลยกฟ้อง ไม่ต้องชดใช้ค่าเสียหาย เพราะการเสียเปรียบราคาเกิดจากสัญญาซื้อขายในตลาด มิได้เป็นผลโดยตรงจากประกาศของรัฐ"
  },
{
    _id: "post-2",
    title: "แบ่งซื้อพัสดุเพื่อเลี่ยงขั้นตอน: ตามระเบียบถือว่าผิด แต่จะผิดฐานทุจริตด้วยหรือไม่?",
    slug: "split-procurement-case",
    category: "CASE STUDY: อุทาหรณ์คดีปกครอง",
    categoryColor: "text-amber-600 dark:text-amber-400",
    publishedAt: "ศาลปกครองสูงสุด อ. 166/2569",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    excerpt: "เรื่องเล่าห้องคอมฯ: เมื่อ ผอ. หั่นงบซื้อของร้านลูกน้องเพื่อเลี่ยงวิธีสอบราคา ศาลชี้ว่าผิดระเบียบพัสดุจริง แต่ไม่ผิดฐานทุจริต เพราะซื้อตามราคาท้องตลาด ไม่เบิกงบค่าแรง และราชการไม่เสียหาย จึงสั่งเพิกถอนคำสั่งไล่ออกย้อนหลัง"
  },
  {
    _id: "post-3",
    title: "Runway Stress-Test: เช็กความแข็งแกร่งของกระแสเงินสดก่อนเร่งโตสู่ 100M",
    slug: "runway-cashflow-stress-test",
    category: "FINANCIAL HEALTH",
    categoryColor: "text-purple-500",
    publishedAt: "May 15, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    excerpt: "สูตรคำนวณ Burn Rate และสภาพคล่องสุทธิ เพื่อประเมินว่าธุรกิจสามารถรองรับภาระรายจ่ายและการขยายทีมก้อนใหม่ได้นานกี่เดือนก่อนถึงจุดวิกฤต"
  }
];

export default function ArchivePage() {
  const [searchQuery, setSearchQuery] = useState("");

  // กรองบทความตามคำค้นหาแบบ Real-time
  const filteredPosts = archivePosts.filter((post) => {
    const query = searchQuery.toLowerCase().trim();
    return (
      post.title.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    );
  });

  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-10">
      {/* ส่วนหัว: ข้อมูลผู้เขียน (Author Profile) */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="relative w-28 h-28 mb-4 overflow-hidden rounded-full ring-4 ring-gray-100 dark:ring-gray-800">
          <Image
            src={authorData.avatar}
            alt={authorData.name}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {authorData.name}
        </h1>
        <p className="mt-2 text-sm font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
          {authorData.title}
        </p>
        <p className="mt-3 max-w-xl text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          {authorData.bio}
        </p>
      </div>

      {/* ส่วนกล่องค้นหา (Search Box) */}
      <div className="max-w-md mx-auto mb-14">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="ค้นหาเคสคดี, ภาษี, สัญญา, กระแสเงินสด..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 pr-11 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all shadow-sm"
          />
          <div className="absolute right-4 text-gray-400 pointer-events-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ส่วนตะแกรงบทความ: 3 คอลัมน์ (ปรับเปลี่ยนตามคำค้นหา) */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
{filteredPosts.map((post) => (
          <article key={post._id} className="flex flex-col group">
            {/* ครอบรูปภาพด้วย Link ให้กดคลิกได้ */}
            <Link href={`/post/${post.slug}`} className="block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 mb-4 cursor-pointer">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
            
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[11px] font-bold uppercase tracking-wider ${post.categoryColor}`}>
                {post.category}
              </span>
              <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
              <span className="text-xs text-gray-400">{post.publishedAt}</span>
            </div>

            {/* ครอบชื่อเรื่องด้วย Link ให้กดคลิกได้ */}
            <Link href={`/post/${post.slug}`} className="block">
              <h2 className="text-lg font-semibold leading-snug text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 cursor-pointer">
                {post.title}
              </h2>
            </Link>

            {post.excerpt && (
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </article>
        ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 dark:text-gray-400 text-base">
            ไม่พบบทความหรือเคสที่ตรงกับคำค้นหา &quot;{searchQuery}&quot;
          </p>
        </div>
      )}
    </div>
  );
}