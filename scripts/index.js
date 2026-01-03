const serviceCardContainer = document.getElementById("services_card_container");
const blogPostContainer = document.getElementById("blog_post_container");
const valueContainer = document.getElementById("core_values_card-container");
const testimonialContainer = document.getElementById("testimonial_card_container");

const services = [
    {
      icon: 'fas fa-shower',
      title: 'Personal Care',
      description: 'Assistance with daily living activities including bathing, dressing, and personal hygiene with dignity and respect.',
      details: 'Our trained carers provide compassionate support for all personal care needs, ensuring your comfort and maintaining your independence.'
    },
    {
      icon: 'fas fa-utensils',
      title: 'Meal Preparation',
      description: 'Nutritious meal planning and preparation tailored to individual dietary needs and preferences.',
      details: 'We prepare healthy, delicious meals that meet your dietary requirements and preferences, promoting nutrition and wellbeing.'
    },
    {
      icon: 'fas fa-broom',
      title: 'Household Support',
      description: 'Light housekeeping, laundry, and general household maintenance to keep your home comfortable.',
      details: 'Keep your home clean and organized with our professional household support services, allowing you to focus on what matters.'
    },
    {
      icon: 'fas fa-pills',
      title: 'Medication Support',
      description: 'Safe medication administration and management under professional supervision.',
      details: 'We ensure medications are taken correctly and on time, with careful record-keeping and GP liaison for your safety.'
    },
    {
      icon: 'fas fa-brain',
      title: 'Dementia Care',
      description: 'Specialized care for individuals with dementia, delivered with patience and understanding.',
      details: 'Our specialized team provides compassionate dementia care with techniques to support memory, safety, and emotional wellbeing.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Companionship',
      description: '24/7 companionship and emotional support to enhance quality of life and wellbeing.',
      details: 'Combat loneliness with meaningful companionship, social engagement, and emotional support from our caring team.'
    }
];

services.forEach((service, idx) => {
    const Icon = service.icon;
    const card = document.createElement("div");
    card.className = "bg-white border-2 border-[#E5E7EB] rounded-2xl p-8 hover:border-[#3FB8A8] hover:shadow-2xl transition-all duration-300";
    card.innerHTML = `
      <div>
        <i class="${Icon} w-12 h-12 text-[#3FB8A8] mb-4"></i>
        <h3 class="text-2xl font-bold text-gray-900 mb-4">${service.title}</h3>
        <p class="text-gray-600 leading-relaxed mb-3">${service.description}</p>
        <p class="text-gray-600 text-sm leading-relaxed">${service.details}</p>
        </div>
        `;
        serviceCardContainer.appendChild(card);
    });
    
const values = [
    {
        icon: "fas fa-handshake",
        title: 'Dignity & Respect',
        description: 'Every individual is treated with the utmost dignity and respect in all interactions.'
    },
    {
        icon: "fas fa-user-friends",
        title: 'Person-Centred Care',
        description: 'Care plans tailored to individual needs, preferences, and aspirations.'
    },
    {
        icon: "fas fa-trophy",
        title: 'Quality Excellence',
        description: 'Committed to exceeding CQC standards and continuous improvement.'
    },
    {
        icon: "fas fa-clock",
        title: '24/7 Availability',
        description: 'Available around the clock, every day of the year for your peace of mind.'
    }
];
    
    
values.forEach((value, idx) => {
    const Icon = value.icon;
    const valueCard = document.createElement("div");
    valueCard.className = "bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300";
    valueCard.innerHTML = `
        <div class="bg-[#3FB8A8]/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <i class="${Icon} w-8 h-8 text-[#3FB8A8]"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">${value.title}</h3>
        <p class="text-gray-600">${value.description}</p>
    `;
    valueContainer.appendChild(valueCard);
});

const blogPosts = [
    {
      id: 1,
      title: "Understanding Dementia Care: Best Practices and Support Strategies",
      excerpt: "Dementia affects millions worldwide. Learn about compassionate care approaches that maintain dignity and quality of life for those living with cognitive decline.",
      date: "November 28, 2025",
      category: "Care Guide",
      icon: "fas fa-brain",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Importance of Person-Centred Care in Home Support",
      excerpt: "Discover how tailored care plans can significantly improve outcomes and wellbeing for service users. Our approach puts individuals at the heart of everything we do.",
      date: "November 25, 2025",
      category: "Industry Insight",
      icon: "fas fa-user-friends",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Maintaining Independence: Tips for Aging in Place",
      excerpt: "Aging in place doesn't mean isolation. Explore practical strategies and support options that help seniors maintain independence while staying safe at home.",
      date: "November 22, 2025",
      category: "Wellness",
      icon: "fas fa-home",
      readTime: "4 min read"
    }
];

blogPosts.forEach((post) => {
    const PostIcon = post.icon;
    const postCard = document.createElement("div");
    postCard.className = "bg-white border-2 border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#3FB8A8] hover:shadow-2xl transition-all duration-300 flex flex-col";
    postCard.innerHTML = `
      <div class="bg-gradient-to-br from-[#3FB8A8]/10 to-[#FF6B6B]/10 h-40 flex items-center justify-center">
        <i class="${PostIcon} w-16 h-16 text-[#3FB8A8]"></i>
      </div>
      <div class="p-6 flex flex-col flex-grow">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-[#3FB8A8] uppercase tracking-wide">${post.category}</span>
          <span class="text-xs text-gray-500">${post.readTime}</span>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3 leading-tight">
          ${post.title}
        </h3>
        <p class="text-gray-600 text-sm mb-4 flex-grow">
          ${post.excerpt}
        </p>
        <div class="flex items-center justify-between pt-4 border-t border-gray-200">
          <span class="text-gray-500 text-sm">${post.date}</span>
          <button class="text-[#3FB8A8] hover:text-[#36a596] transition-colors">
            <i class="fas fa-arrow-right w-5 h-5"></i>
          </button>
        </div>
        </div>
        `;
        blogPostContainer.appendChild(postCard);
    });

// {blogPosts.map((post) => {
//               const PostIcon = post.icon;
//               return (
//                 <div
//                   key={post.id}
//                   class="bg-white border-2 border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#3FB8A8] hover:shadow-2xl transition-all duration-300 flex flex-col"
//                 >
//                   <div class="bg-gradient-to-br from-[#3FB8A8]/10 to-[#FF6B6B]/10 h-40 flex items-center justify-center">
//                     <PostIcon class="w-16 h-16 text-[#3FB8A8]" />
//                   </div>

//                   <div class="p-6 flex flex-col flex-grow">
//                     <div class="flex items-center justify-between mb-3">
//                       <span class="text-xs font-bold text-[#3FB8A8] uppercase tracking-wide">{post.category}</span>
//                       <span class="text-xs text-gray-500">{post.readTime}</span>
//                     </div>

//                     <h3 class="text-xl font-bold text-gray-900 mb-3 leading-tight">
//                       {post.title}
//                     </h3>

//                     <p class="text-gray-600 text-sm mb-4 flex-grow">
//                       {post.excerpt}
//                     </p>

//                     <div class="flex items-center justify-between pt-4 border-t border-gray-200">
//                       <span class="text-gray-500 text-sm">{post.date}</span>
//                       <button class="text-[#3FB8A8] hover:text-[#36a596] transition-colors">
//                         <ArrowRight class="w-5 h-5" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}

const testimonials = [
    {
      text: "The care team has been absolutely wonderful. They treat my mother with such respect and dignity. She looks forward to their visits every day.",
      author: "Margaret Thompson",
      location: "Burton on Trent",
      rating: 5
    },
    {
      text: "I am so impressed with the quality of care provided. The staff are kind, understanding, and professional. The management team is magnificent.",
      author: "David Wilson",
      location: "Staffordshire",
      rating: 5
    },
    {
      text: "Life Choice Services provides professional care with a sympathetic, well-trained, and friendly team. We are full of praise for their service.",
      author: "Patricia Brown",
      location: "UK",
      rating: 5
    },
    {
      text: "The carers are considerate and thoughtful. I've developed a wonderful relationship with them and wouldn't hesitate to recommend their service.",
      author: "James Anderson",
      location: "Midlands",
      rating: 5
    }
  ];

let currentTestimonial = 0;

function renderTestimonial() {
  testimonialContainer.innerHTML = ""; // clear previous

  const testimonial = testimonials[currentTestimonial];
  if (!testimonial) return;

  const testimonialCard = document.createElement("div");
  testimonialCard.className =
    "bg-white border-2 border-[#E5E7EB] rounded-2xl p-8 hover:border-[#3FB8A8] hover:shadow-2xl transition-all duration-300";

  let stars = "";
  for (let i = 0; i < testimonial.rating; i++) {
    stars += '<i class="fas fa-star text-yellow-400"></i> ';
  }

  testimonialCard.innerHTML = `
    <div class="mb-4">
      ${stars}
    </div>
    <p class="text-gray-600 leading-relaxed mb-6">"${testimonial.text}"</p>
    <h4 class="text-lg font-bold text-gray-900">${testimonial.author}</h4>
    <span class="text-gray-500 text-sm">${testimonial.location}</span>
  `;

  testimonialContainer.appendChild(testimonialCard);
}
renderTestimonial();

function setCurrentTestimonial(index) {
  currentTestimonial = index;
  renderTestimonial();
}

function nextTestimonial() {
  currentTestimonial =
    (currentTestimonial + 1) % testimonials.length;
  renderTestimonial();
}

function prevTestimonial() {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  renderTestimonial();
}
// Auto-advance every 10 seconds
setInterval(nextTestimonial, 10000);