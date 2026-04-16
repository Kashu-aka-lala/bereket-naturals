export interface BoardMember {
  name: string;
  designation: string;
  image: string;
  qualifications: string[];
  experience: string;
  creds?: string;
  email?: string;
  message?: string;
}

export const boardMembers: BoardMember[] = [
  {
    name: "Mr. Sardar Nayyer Khan",
    designation: "Chief Executive Officer",
    image: "/assets/images/leadership/board/1.png",
    qualifications: ["CPA, CGA (Canada)", "CMA", "MBA", "Rtd. Squadron Leader"],
    experience: "Leading Bereket Foods with strategic vision, combining decades of financial expertise and military discipline to drive company growth and operational excellence.",
    creds: "Rtd. Squadron Leader. CPA, CGA (Canada), CMA, MBA",
    email: "ceo@bereketfoods.com",
    message: "\"Bereket\" is derived from Turkmen language and means abundance or prosperity and it is this very concept that we want to bring to the world in an age when people are vying for better lifestyles based on a dependable amalgamation of nature and science. We at Bereket believe in \"goodness\" our prime corporate value - that makes us look and nurture it in products, people, stakeholders and our customers. Together we are Bereket, and together we represent Goodness and Prosperity."
  },
  {
    name: "Mr. Rana M. Nouman",
    designation: "Founder & Managing Director",
    image: "/assets/images/leadership/board/2.png",
    qualifications: ["Business Graduate", "Strategic Entrepreneur"],
    experience: "Founded Bereket Foods with a mission to restore essential nutrition to Pakistani lifestyles. Leading the company's expansion across FMCG and healthcare sectors.",
    creds: "Strategic Entrepreneur. Business Graduate",
    email: "md@bereketfoods.com",
    message: "We are committed to nurturing lives by delivering sustainable, forward-thinking solutions across the Food, FMCG, and Healthcare sectors. Our mission is to restore essential nutrition to the heart of our rapidly evolving lifestyles. By blending innovation with a deep respect for well-being, we bridge the gap between modern convenience and holistic health. We strive to empower individuals, ensuring that a healthier, more sustainable future is accessible to everyone."
  },
  {
    name: "Mr. Faisal Omer Hayat",
    designation: "COO & Co-Founder",
    image: "/assets/images/leadership/board/3.png",
    qualifications: ["Operations Management", "Supply Chain Expert"],
    experience: "Overseeing day-to-day operations and ensuring seamless coordination across production, logistics, and distribution networks."
  },
  {
    name: "Mr. Mufti Aitisam Ud Din Haider",
    designation: "Executive Director Sales",
    image: "/assets/images/leadership/board/4.png",
    qualifications: ["Sales Leadership", "Market Strategy"],
    experience: "Driving sales growth and market expansion strategies across Pakistan's competitive FMCG landscape."
  },
  {
    name: "Mr. Usama Khan Swati",
    designation: "Executive Director Operations",
    image: "/assets/images/leadership/board/5.png",
    qualifications: ["Operations Management", "Process Optimization"],
    experience: "Streamlining operational processes and ensuring efficiency across all business units."
  },
  {
    name: "Mr. Muhammad Abubakar",
    designation: "Non-Executive Director",
    image: "/assets/images/leadership/board/6.png",
    qualifications: ["Strategic Advisory", "Corporate Governance"],
    experience: "Providing strategic guidance and ensuring robust corporate governance practices."
  }
];
