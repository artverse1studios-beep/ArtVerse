document.addEventListener('DOMContentLoaded', function() {
    // Sample art data - in a real app, this would come from an API
    const artworks = [
        { id: 1, title: "Whispers of Dawn", artist: "Sophia Laurent", year: 2023, category: "current", image: "http://static.photos/art/640x360/101" },
        { id: 2, title: "Mountain Snow", artist: "Mac-Donald", year: 2023, category: "past", image: "images/IMG-20251203-WA0044.jpg" },
        { id: 3, title: "Fragmented Reality", artist: "Elena Rodriguez", year: 2023, category: "ongoing", image: "http://static.photos/art/640x360/103" },
        { id: 4, title: "Silent Reverie", artist: "Sophia Laurent", year: 2021, category: "past", image: "http://static.photos/art/640x360/104" },
        { id: 5, title: "Chromatic Dreams", artist: "Marcus Chen", year: 2023, category: "current", image: "http://static.photos/art/640x360/105" },
        { id: 6, title: "Ephemeral Bonds", artist: "Elena Rodriguez", year: 2022, category: "past", image: "http://static.photos/art/640x360/106" },
    ];

    const galleryGrid = document.querySelector('.gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Render all artworks initially
    renderArtworks(artworks);

    // Filter artworks based on category
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.textContent.toLowerCase();
            let filteredArtworks = artworks;

            if (filter !== 'all') {
                filteredArtworks = artworks.filter(art => art.category === filter);
            }

            renderArtworks(filteredArtworks);
        });
    });

    function renderArtworks(artworksToRender) {
        galleryGrid.innerHTML = '';
        
        artworksToRender.forEach(art => {
            const artElement = document.createElement('div');
            artElement.className = 'gallery-item bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300';
            artElement.innerHTML = `
                <img src="${art.image}" alt="${art.title}" class="w-full h-64 object-cover">
                <div class="p-4">
                    <h3 class="font-semibold text-lg mb-1">${art.title}</h3>
                    <p class="text-gray-600 text-sm mb-2">${art.artist}, ${art.year}</p>
                    <a href="#" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center">
                        View Details <i data-feather="chevron-right" class="ml-1 w-4 h-4"></i>
                    </a>
                </div>
            `;
            galleryGrid.appendChild(artElement);
        });

        // Re-initialize feather icons for newly added elements
        feather.replace();
    }
});
        // Trigger fade-in animations when page loads
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll('.fade-in').forEach(el => {
                el.classList.add('opacity-100');
            });
        });
    
    document.addEventListener('DOMContentLoaded', () => {
        //exhibitition menu
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            });
        });
        
      const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const menuIcon = document.getElementById('menu-icon');
      const closeIcon = document.getElementById('close-icon');

      let isOpen = false;

      menuBtn.addEventListener('click', () => {
        isOpen = !isOpen;

        // Toggle mobile menu visibility
        if (isOpen) {
          mobileMenu.classList.remove('hidden');
          mobileMenu.classList.add('block');
          closeIcon.classList.remove('hidden');
          menuIcon.classList.add('hidden');
        } else {
          mobileMenu.classList.remove('block');
          mobileMenu.classList.add('hidden');
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      });

      // Close menu when clicking a link (mobile)
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          isOpen = false;
          mobileMenu.classList.remove('block');
          mobileMenu.classList.add('hidden');
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        });
      });
    });
  

    const preview   = document.getElementById('story-preview');
    const full      = document.getElementById('full-story');
    const dots      = document.getElementById('dots');
    const btn       = document.getElementById('toggle-btn');

    btn.addEventListener('click', () => {
        if (full.classList.contains('hidden')) {
            // Show full story
            full.classList.remove('hidden');
            preview.classList.add('hidden');
            btn.textContent = 'Show Less';
        } else {
            // Collapse back
            full.classList.add('hidden');
            preview.classList.remove('hidden');
            btn.textContent = 'Learn More';
        }
    });
     document.addEventListener('DOMContentLoaded', () => {
        //exhibitition menu
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            });
        });
        
      const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const menuIcon = document.getElementById('menu-icon');
      const closeIcon = document.getElementById('close-icon');

      let isOpen = false;

      menuBtn.addEventListener('click', () => {
        isOpen = !isOpen;

        // Toggle mobile menu visibility
        if (isOpen) {
          mobileMenu.classList.remove('hidden');
          mobileMenu.classList.add('block');
          closeIcon.classList.remove('hidden');
          menuIcon.classList.add('hidden');
        } else {
          mobileMenu.classList.remove('block');
          mobileMenu.classList.add('hidden');
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      });

      // Close menu when clicking a link (mobile)
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          isOpen = false;
          mobileMenu.classList.remove('block');
          mobileMenu.classList.add('hidden');
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        });
      });
    });
    