import Image from "next/image";
import Link from "next/link";

// ฐานข้อมูลบทความเคสคดีปกครอง
const postsData = {
  // Case 1: คดีมันสำปะหลัง
  "ultra-vires-cassava-case": {
    title: "หวังดีแต่ไม่มีอำนาจ: เมื่อประกาศแสดงราคามันสำปะหลังไม่ชอบ เหตุไฉนไม่ละเมิด ?",
    category: "CASE STUDY: อุทาหรณ์คดีปกครอง",
    caseNo: "ศาลปกครองสูงสุด อร. 120/2568",
    readTime: "อ่าน 3 นาที",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    summary30s: "เจ้าหน้าที่รัฐออกประกาศคุ้มครองราคาสินค้าโดยไม่มีอำนาจตามกฎหมาย ประกาศจึงไม่ชอบด้วยกฎหมาย แต่เมื่อความเสียหายของเกษตรกรเกิดจากสัญญาซื้อขายตามกลไกตลาด มิได้เกิดจากประกาศโดยตรง รัฐจึงไม่ต้องรับผิดชดใช้ค่าเสียหายฐานละเมิด ศาลจึงพิพากษายกฟ้อง",
    storyTitle: "เรื่องเล่าลานมัน: เมื่อข้าราชการ \"หวังดีทำเกินหน้าที่\" แต่ทำไมศาลสั่ง \"ไม่ต้องจ่ายสักบาท\"?",
    storyContent: [
      "ลองจินตนาการดูว่า เกษตรกรขนมันสำปะหลังไปขายที่ลานมัน แล้วมักถูกพ่อค้ากดราคา อ้างว่าดินเยอะ ทรายแยะ หักเงินดื้อ ๆ ปัญหานี้ร้อนถึง ท่านอธิบดีกรมการค้าภายใน ด้วยความหวังดีอยากช่วยชาวบ้าน จึงออกประกาศสั่งลานมันทั่วประเทศว่า: 'ห้ามหักเงินค่าสิ่งเจือปนเกิน 10% นะ!'",
      "แต่ปรากฏว่า มีชาวบ้านคนหนึ่งขนมันไปขายแล้วถูกลานมันหักเงินไป 49,555 บาท ชาวบ้านโกรธจัด คิดว่าประกาศนี้ทำให้พ่อค้าได้ใจหักเงิน จึงนำคดีมาฟ้องศาลปกครองขอให้เพิกถอนประกาศ และสั่งชดใช้ค่าเสียหาย"
    ],
    rulings: [
      {
        head: "1. \"ท่านอธิบดีทำผิดระเบียบจริง!\" (Ultra Vires)",
        desc: "ประกาศนี้มีผลบังคับลานมันทั่วราชอาณาจักร จึงมีสภาพเป็น \"กฎ\" ซึ่งกฎหมายกำหนดให้เป็นอำนาจของคณะกรรมการ กกร. เมื่อไม่มีการมอบอำนาจให้อธิบดีฯ ประกาศนี้จึงออกโดยมิชอบด้วยกฎหมาย"
      },
      {
        head: "2. \"แต่... รัฐไม่ต้องจ่ายเงินชดใช้!\" (No Causation)",
        desc: "เงินที่ถูกหักไปเกิดจากการชั่งตวงวัดและตกลงทำสัญญาซื้อขายตามกลไกตลาดเสรี เกษตรกรมีเสรีภาพที่จะนำไปขายให้ลานอื่นได้ ความเสียหายไม่ได้เกิดจากประกาศของรัฐโดยตรง จึงไม่เป็นละเมิดตามมาตรา 420 ป.พ.พ. ศาลจึงพิพากษายกฟ้อง"
      }
    ],
    takeaway: "เจตนาดีแต่ทำลัดขั้นตอน กฎหมายถือว่าเป็นโมฆะ แต่หากคุณจะฟ้องเอาค่าเสียหาย คุณต้องพิสูจน์ให้ได้ว่าความเสียหายนั้นเกิดจากข้อกำหนดนั้นโดยตรง ไม่ใช่เกิดจากความยินยอมในสัญญาของคุณเอง"
  },

  // Case 2: คดีแบ่งซื้อพัสดุห้องคอมฯ
  "split-procurement-case": {
    title: "แบ่งซื้อพัสดุเพื่อเลี่ยงขั้นตอน : ตามระเบียบถือว่าผิด แต่จะผิดฐานทุจริตด้วยหรือไม่ ?",
    category: "CASE STUDY: อุทาหรณ์คดีปกครอง",
    caseNo: "ศาลปกครองสูงสุด อ. 166/2569",
    readTime: "อ่าน 3 นาที",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    summary30s: "การแบ่งซื้อพัสดุเพื่อเลี่ยงขั้นตอนสอบราคา แม้จะซื้อจากร้านของลูกน้อง ถือว่าฝ่าฝืนระเบียบพัสดุและเป็นความผิดทางวินัย แต่เมื่อของได้ราคาตามท้องตลาด ให้นักศึกษาช่วยติดตั้งโดยไม่เบิกค่าแรง งานใช้งานได้จริง และไม่มีการแสวงหาประโยชน์ที่มิควรได้ จึงขาดองค์ประกอบความผิดฐานทุจริต ศาลปกครองสูงสุดจึงพิพากษาเพิกถอนคำสั่งไล่ออก แต่เปิดทางให้ลงโทษวินัยฐานผิดระเบียบใหม่ได้",
    storyTitle: "เรื่องเล่าห้องคอมฯ: เมื่อ ผอ. \"ซิกแซ็กงบ\" สั่งซื้อของร้านลูกน้อง... ทำไมศาลตัดสินว่า \"ผิดระเบียบ แต่ไม่ได้โกง!\"?",
    storyContent: [
      "เรื่องมีอยู่ว่า ท่าน ผอ. วิทยาลัยการอาชีพ ต้องการทำห้องแล็บคอมพิวเตอร์ 6 ห้องให้นักเรียนได้ใช้งาน โดยมีงบประมาณ 269,950 บาท แต่ระเบียบพัสดุกำหนดว่าหากงบเกิน 1 แสนบาท จะต้องใช้วิธี 'สอบราคา' ซึ่งมีขั้นตอนยุ่งยากและใช้เวลานาน",
      "ด้วยความอยากให้งานเสร็จไว ผอ. จึงสั่ง 'หั่นงบเป็น 3 ครั้ง' ครั้งละไม่เกิน 1 แสนบาท เพื่อใช้วิธี 'ตกลงราคา' ซื้อตรงได้ทันที และร้านที่สั่งซื้อดันเป็นร้านที่มีครูลูกน้องในวิทยาลัยเป็นหุ้นส่วนอยู่ด้วย! ป.ป.ช. ตรวจพบจึงชี้มูลว่าทุจริตต่อหน้าที่ นำไปสู่คำสั่งไล่ออกจากราชการและตัดสิทธิบำนาญทันที ผอ. จึงนำคดีมาฟ้องศาลปกครอง"
    ],
    rulings: [
      {
        head: "1. \"แบ่งซื้อเพื่อเลี่ยงระเบียบ ผิดไหม?\"",
        desc: "ผิดเต็มประตู! พัสดุของโครงการเดียวกันสามารถจัดซื้อได้ในคราวเดียว การจงใจหั่นบิลเพื่อใช้วิธีตกลงราคา เป็นการหลีกเลี่ยงวิธีสอบราคา ถือเป็นความผิดวินัยฐานฝ่าฝืนระเบียบพัสดุฯ"
      },
      {
        head: "2. \"แต่มันคือการ 'ทุจริต' (โกงกิน) หรือไม่?\"",
        desc: "ศาลชี้ว่ายังไม่ทุจริต! เพราะคำว่าทุจริตต้องมีเจตนาแสวงหา 'ประโยชน์ที่มิควรได้' แต่คดีนี้ของที่ซื้อเป็นราคาตลาด ไม่บวกชาร์จแพง, งานติดตั้งให้นักศึกษาฝึกงานทำโดยไม่เบิกค่าแรง, ห้องคอมฯ ใช้งานได้สมบูรณ์ และราชการไม่เสียหาย จึงขาดเจตนาทุจริต คำสั่งไล่ออกจึงไม่ชอบด้วยกฎหมาย ศาลจึงพิพากษาเพิกถอนคำสั่งไล่ออกย้อนหลัง"
      }
    ],
    takeaway: "\"ทำผิดระเบียบเพื่อให้งานเสร็จ\" ไม่เท่ากับ \"โกงกิน\" แต่ข้าราชการและผู้บริหารไม่ควรลอกเลียนแบบ เพราะถึงแม้ศาลจะวินิจฉัยว่าไม่ทุจริต แต่การฝ่าฝืนระเบียบพัสดุก็ยังมีความผิดทางวินัยรอลงทัณฑ์อยู่ดี"
  }
};

export default async function PostDetailPage({ params }) {
  // รองรับ params ใน Next.js ทุกเวอร์ชัน
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const post = postsData[slug] || postsData["ultra-vires-cassava-case"];

  return (
    <main className="py-10">
      <article className="container px-5 mx-auto max-w-screen-lg">
        
        {/* 1. ส่วนหัว: หมวดหมู่, หัวข้อ, และแถบผู้เขียน (จัดกึ่งกลางตามแบบ) */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt="Nitikarn Advisory"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-medium text-gray-900 dark:text-gray-200">
              Nitikarn Advisory
            </span>
            <span>•</span>
            <span>{post.caseNo}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* 2. ภาพปกบทความขนาดใหญ่ มุมโค้งมน */}
        <div className="relative aspect-[16/9] max-w-4xl mx-auto overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 mb-12 shadow-sm">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* 3. เนื้อหาบทความ (จัดหน้าคลีน อ่านสบาย) */}
        <div className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-7">
          
          {/* กล่องสรุปเร็ว 30 วินาที */}
          <div className="p-6 bg-emerald-50 dark:bg-emerald-950/30 border-l-4 border-emerald-500 rounded-r-xl text-base">
            <p className="font-bold text-emerald-900 dark:text-emerald-300 mb-1">
              ⏱️ สรุปปิดจบใน 30 วินาที (Executive Summary)
            </p>
            <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
              &ldquo;{post.summary30s}&rdquo;
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {post.storyTitle}
            </h2>
            {post.storyContent.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </section>

          {/* กล่องคำวินิจฉัยของศาล */}
          <div className="p-6 my-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700 text-base space-y-4">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">
              ประเด็นชี้ขาดของศาลปกครองสูงสุด:
            </h3>
            {post.rulings.map((ruling, index) => (
              <div key={index}>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {ruling.head}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {ruling.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="pt-2">
            <strong>บทเรียนสำคัญ:</strong> {post.takeaway}
          </p>
        </div>

        {/* 4. ส่วนท้าย: ปุ่มย้อนกลับ และ กล่องโปรไฟล์ผู้เขียน (About Author Card) */}
        <div className="max-w-2xl mx-auto mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
          
          <div className="text-center mb-12">
            <Link
              href="/archive"
              className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 transition-colors"
            >
              ← View all posts
            </Link>
          </div>

          <div className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-100 dark:border-gray-800">
            <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 ring-2 ring-gray-200 dark:ring-gray-700">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                alt="Nitikarn Advisory"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                About Nitikarn Advisory
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                ทีมที่ปรึกษากฎหมายมหาชนและยุทธศาสตร์การเงิน CFO มุ่งเน้นการถอดรหัสข้อพิพาททางปกครอง ตรวจสอบสัญญา และเสริมสร้างเกราะป้องกันความเสี่ยงสำหรับธุรกิจและสตาร์ทอัป
              </p>
              <Link
                href="/archive"
                className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
              >
                View Profile
              </Link>
            </div>
          </div>

        </div>

      </article>
    </main>
  );
}