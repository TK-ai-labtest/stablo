import Image from "next/image";
import Link from "next/link";

// 1. ข้อมูลโปรไฟล์ผู้เขียน (Author Profile)
const authorData = {
  name: "Nitikarn Advisory",
  title: "Legal & Strategic CFO Partner",
  bio: "ถอดรหัสข้อพิพาททางปกครองและกฎหมายธุรกิจ สรุปข้อเท็จจริง คัดกรองความเสี่ยงสัญญา และวางเกราะป้องกันภาษีสำหรับผู้ประกอบการ",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
};

// 2. รายการบทความ (ปรับ post-1 เป็นคดีมันสำปะหลัง ส่วน post-2 และ 3 คงไว้เป็นตัวอย่าง)
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
    title: "ภาษีหัก ณ ที่จ่าย 3% หรือค่าสินค้า: จ่ายบิลอย่างไรให้สรรพากรไม่บวกกลับ",
    slug: "withholding-tax-guide",
    category: "TAX & COMPLIANCE",
    categoryColor: "text-emerald-500",
    publishedAt: "May 18, 2026",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    excerpt: "เจาะลึกความต่างระหว่างสัญญาจ้างทำของกับสัญญาซื้อขาย พร้อมแนวทางการออกใบกำกับภาษีและใบรับรองหัก ณ ที่จ่าย 50 ทวิ ให้ถูกต้องเพื่อความปลอดภัยของ SME"
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
  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-10">
      {/* ส่วนหัว: ข้อมูลผู้เขียน (Author Profile) */}
      <div className="flex flex-col items-center text-center mb-14">
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

      {/* ส่วนตะแกรงบทความ: 3 คอลัมน์ */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {archivePosts.map((post) => (
          <article key={post._id} className="flex flex-col group">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 mb-4">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[11px] font-bold uppercase tracking-wider ${post.categoryColor}`}>
                {post.category}
              </span>
              <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
              <span className="text-xs text-gray-400">{post.publishedAt}</span>
            </div>

            <h2 className="text-lg font-semibold leading-snug text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
              {post.title}
            </h2>

            {post.excerpt && (
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
