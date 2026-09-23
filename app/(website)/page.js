import HomePage from "./home";

// 1. จำลองข้อมูลบทความขึ้นมาเองตรงๆ โดยไม่ต้องพึ่งพา Sanity CMS
const mockPosts = [
  {
    _id: "post-1",
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    slug: { current: "architectural-engineering-wonders" },
    publishedAt: "2024-01-15T00:00:00Z",
    excerpt: "Exploring modern structures and clean architectural designs around the world.",
    author: {
      name: "Mario Sanchez",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
      }
    }
  },
  {
    _id: "post-2",
    title: "5 Effective Brain Recharging Activities No One is Talking About",
    slug: { current: "brain-recharging-activities" },
    publishedAt: "2024-01-12T00:00:00Z",
    excerpt: "Simple habits that improve focus, reduce screen fatigue, and boost mental clarity.",
    author: {
      name: "Joshua Wood",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
      }
    }
  }
];

export default async function IndexPage() {
  // 2. ส่งข้อมูล Mock เข้าไปยัง HomePage เหมือนเดิม
  return <HomePage posts={mockPosts} />;
}