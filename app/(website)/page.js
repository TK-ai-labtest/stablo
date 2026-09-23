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
        url: "https://images.unsplash.com/photo-1576831371356-d6e9411ae501?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        url: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    }
  }
];

export default async function IndexPage() {
  // 2. ส่งข้อมูล Mock เข้าไปยัง HomePage เหมือนเดิม
  return <HomePage posts={mockPosts} />;
}