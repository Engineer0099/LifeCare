const footerContainer = document.getElementById('footer');

const Footer = `
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 class="text-2xl font-bold text-[#3FB8A8] mb-4">Life Choice Services</h3>
            <p class="text-gray-400">Professional domiciliary care with dignity and respect.</p>
          </div>
          <div>
            <h4 class="font-bold mb-4 text-white">Services</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="/services.html" class="hover:text-[#3FB8A8] transition-colors">Personal Care</a></li>
              <li><a href="/services.html" class="hover:text-[#3FB8A8] transition-colors">Meal Preparation</a></li>
              <li><a href="/services.html" class="hover:text-[#3FB8A8] transition-colors">Dementia Care</a></li>
              <li><a href="/services.html" class="hover:text-[#3FB8A8] transition-colors">24/7 Support</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4 text-white">Company</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="/about.html" class="hover:text-[#3FB8A8] transition-colors">About Us</a></li>
              <li><a href="/testimonials.html" class="hover:text-[#3FB8A8] transition-colors">Testimonials</a></li>
              <li><a href="/blog.html" class="hover:text-[#3FB8A8] transition-colors">Blog</a></li>
              <li><a href="/" class="hover:text-[#3FB8A8] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4 text-white">Contact</h4>
            <div class="space-y-3 text-gray-400">
              <div class="flex items-start gap-3">
                <Phone class="w-5 h-5 text-[#3FB8A8] flex-shrink-0 mt-1" />
                <a href="tel:07397149133" class="hover:text-[#3FB8A8] transition-colors">07397 149133</a>
              </div>
              <div class="flex items-start gap-3">
                <Mail class="w-5 h-5 text-[#3FB8A8] flex-shrink-0 mt-1" />
                <a href="mailto:nasra@myhomecare.co.uk" class="hover:text-[#3FB8A8] transition-colors">nasra@myhomecare.co.uk</a>
              </div>
              <div class="flex items-start gap-3">
                <MapPin class="w-5 h-5 text-[#3FB8A8] flex-shrink-0 mt-1" />
                <div class="text-sm">
                  <p>Studio 2, Unit 16</p>
                  <p>Waterside Court</p>
                  <p>Burton on Trent</p>
                  <p>Staffordshire DE14 2WQ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-800 pt-8">
          <div class="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p class="font-semibold text-white mb-2">CQC Registration</p>
              <p class="text-gray-400 text-sm">Provider ID: 1-23688687275</p>
            </div>
            <div>
              <p class="font-semibold text-white mb-2">Companies House</p>
              <p class="text-gray-400 text-sm">Registered No: 15548870</p>
            </div>
            <div>
              <p class="font-semibold text-white mb-2">Availability</p>
              <p class="text-gray-400 text-sm">24 hours, 7 days a week</p>
            </div>
          </div>

          <div class="text-center text-gray-400 text-sm">
            <p>&copy; ${new Date().getFullYear()} Life Choice Services Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
`;

footerContainer.innerHTML = Footer;