import Image from "next/image";
import Link from "next/link";

export default function PostDetailPage() {
  return (
    <main className="py-10">
      <article className="container px-5 mx-auto max-w-screen-lg">
        
        {/* 1. ส่วนหัว: หมวดหมู่, หัวข้อ, และแถบผู้เขียน (จัดกึ่งกลางตามแบบ) */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              CASE STUDY: อุทาหรณ์คดีปกครอง
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
            หวังดีแต่ไม่มีอำนาจ: เมื่อประกาศแสดงราคามันสำปะหลังไม่ชอบ เหตุไฉนไม่ละเมิด ?
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
            <span>ศาลปกครองสูงสุด อร. 120/2568</span>
            <span>•</span>
            <span>อ่าน 3 นาที</span>
          </div>
        </div>

        {/* 2. ภาพปกบทความขนาดใหญ่ มุมโค้งมน */}
        <div className="relative aspect-[16/9] max-w-4xl mx-auto overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 mb-12 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
            alt="คดีปกครองราคามันสำปะหลัง"
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
              ⏱️ สรุปปิดจบใน 30 วินาที
            </p>
            <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
              &ldquo;เจ้าหน้าที่รัฐออกประกาศคุ้มครองราคาสินค้าโดยไม่มีอำนาจตามกฎหมาย ประกาศจึงไม่ชอบด้วยกฎหมาย แต่เมื่อความเสียหายของเกษตรกรเกิดจากสัญญาซื้อขายตามกลไกตลาด มิได้เกิดจากประกาศโดยตรง รัฐจึงไม่ต้องรับผิดชดใช้ค่าเสียหายฐานละเมิด ศาลจึงพิพากษายกฟ้อง&rdquo;
            </p>
          </div>

          <p>
            เรื่องเล่าลานมัน: เมื่อข้าราชการ <strong>&ldquo;หวังดีทำเกินหน้าที่&rdquo;</strong> แต่ทำไมศาลตัดสินว่า <strong>&ldquo;ไม่ต้องจ่ายชดใช้สักบาท&rdquo;</strong>?
          </p>

          <p>
            ลองจินตนาการดูว่า เกษตรกรขนมันสำปะหลังไปขายที่ลานมัน แล้วมักถูกพ่อค้ากดราคา อ้างว่าดินเยอะ ทรายแยะ หักเงินดื้อ ๆ ปัญหานี้ร้อนถึง <strong>ท่านอธิบดีกรมการค้าภายใน</strong> ด้วยความหวังดีอยากช่วยชาวบ้าน จึงออกประกาศสั่งลานมันทั่วประเทศว่า: <em>&ldquo;ห้ามหักเงินค่าสิ่งเจือปนเกิน 10% นะ!&rdquo;</em>
          </p>

          <p>
            แต่ปรากฏว่า มีชาวบ้านคนหนึ่งขนมันไปขายแล้วถูกลานมันหักเงินไป 49,555 บาท ชาวบ้านโกรธจัด คิดว่าประกาศนี้ทำให้พ่อค้าได้ใจหักเงิน จึงนำคดีมาฟ้องศาลปกครองขอให้เพิกถอนประกาศ และสั่งชดใช้ค่าเสียหาย
          </p>

          {/* กล่องข้อวินิจฉัยของศาล */}
          <div className="p-6 my-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700 text-base space-y-4">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">
              ศาลปกครองสูงสุดวินิจฉัยตัดประเด็นออกเป็น 2 เสาหลัก:
            </h3>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                1. &ldquo;ท่านอธิบดีทำผิดระเบียบจริง!&rdquo; (Ultra Vires)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                ประกาศนี้มีผลบังคับลานมันทั่วราชอาณาจักร จึงมีสภาพเป็น &ldquo;กฎ&rdquo; ซึ่ง พ.ร.บ.ว่าด้วยราคาสินค้าและบริการฯ กำหนดให้เป็นอำนาจของคณะกรรมการ กกร. เมื่อไม่มีการมอบอำนาจให้อธิบดีฯ ประกาศนี้จึงออกโดยมิชอบด้วยกฎหมาย
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                2. &ldquo;แต่... รัฐไม่ต้องจ่ายเงินชดใช้!&rdquo; (No Causation)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                เงินที่ถูกหักไปเกิดจากการชั่งตวงวัดและตกลงทำสัญญาซื้อขายตามกลไกตลาดเสรี เกษตรกรมีเสรีภาพที่จะนำไปขายให้ลานอื่นได้ ความเสียหายไม่ได้เกิดจากประกาศของรัฐโดยตรง จึงไม่เป็นละเมิดตามมาตรา 420 ป.พ.พ. ศาลจึงพิพากษายกฟ้อง
              </p>
            </div>
          </div>

          <p className="pt-2">
            <strong>บทเรียนสำหรับสัญญาการค้า:</strong> เจตนาดีแต่ทำลัดขั้นตอน กฎหมายถือว่าเป็นโมฆะ แต่หากคุณจะฟ้องเอาค่าเสียหายจากรัฐหรือคู่สัญญา คุณต้องพิสูจน์ให้ได้ว่าความเสียหายนั้นเกิดจากข้อกำหนดนั้นโดยตรง ไม่ใช่เกิดจากความยินยอมในสัญญาของคุณเอง
          </p>
        </div>

        {/* 4. ส่วนท้าย: ปุ่มย้อนกลับ และ กล่องโปรไฟล์ผู้เขียน (About Author Card) */}
        <div className="max-w-2xl mx-auto mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
          
          {/* ลิงก์ย้อนกลับ */}
          <div className="text-center mb-12">
            <Link
              href="/archive"
              className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 transition-colors"
            >
              ← View all posts
            </Link>
          </div>

          {/* About Author Card กรอบมน */}
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