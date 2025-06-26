# Orion Racing India - Official Website

![Orion Racing Logo](images/Logo.png)

## 🏎️ About

Orion Racing India is the official website for the Formula Student team of KJ Somaiya College of Engineering, Mumbai. This website showcases our journey in designing and building formula-style race cars for international competitions.

## 🚀 Features

- **Responsive Design**: Fully responsive website that works on all devices
- **Interactive Landing Page**: Dynamic circular navigation with smooth animations
- **Member Portal**: Secure login system for team members with role-based access
- **Car Showcase**: Detailed technical specifications of our racing vehicles
- **Team Gallery**: Visual showcase of our achievements and team moments
- **Admin Dashboard**: Administrative interface for team management
- **Modern UI/UX**: Glass morphism effects and smooth transitions

## 📁 Project Structure

```
WPL_PROJECT/
├── index.html              # Landing page with circular navigation
├── about.html              # About Orion Racing page
├── car.html                # Car specifications and evolution
├── gallery.html            # Photo gallery with filtering
├── team.html               # Team members showcase
├── sponsors.html           # Sponsors information
├── members.html            # Member login portal
├── member-dashboard.html   # Member dashboard interface
├── admin.html              # Admin panel
├── database_schema.sql     # Database structure
├── css/
│   ├── style.css           # Main stylesheet
│   ├── pages.css           # Page-specific styles
│   ├── circular-nav.css    # Landing page navigation
│   ├── members.css         # Member portal styles
│   ├── member-dashboard.css # Dashboard styles
│   └── admin.css           # Admin panel styles
├── js/
│   ├── main.js             # Main JavaScript functionality
│   └── members.js          # Member portal scripts
├── images/
│   ├── Logo.png            # Main logo
│   ├── about orion.png     # About section image
│   ├── orion car.png       # Car showcase image
│   ├── Landing Page/       # Homepage slideshow images
│   └── member/             # Team member photos
└── README.md
```

## 🎨 Design Features

### Color Scheme
- **Primary**: `#0066cc` (Blue)
- **Secondary**: `#003366` (Dark Blue)
- **Accent**: `#f0f0f0` (Light Grey)
- **Background**: `#000000` (Black)

### Typography
- **Headers**: Orbitron (Racing-inspired font)
- **Body**: Rajdhani (Modern, clean font)

### Special Effects
- Glass morphism cards
- Smooth CSS transitions
- Parallax scrolling
- Animated circular navigation
- Responsive grid layouts

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Database**: MySQL
- **Fonts**: Google Fonts (Orbitron, Rajdhani, Inter)
- **Icons**: Font Awesome 6.0
- **Responsive Framework**: CSS Grid & Flexbox

## 📊 Database Schema

The project includes a comprehensive MySQL database with the following tables:

- `users` - User authentication and profiles
- `teams` - Team organization structure
- `team_members` - Many-to-many relationship for team membership
- `projects` - Project management
- `tasks` - Task assignment and tracking
- `deadlines` - Important dates and milestones
- `announcements` - Team communications
- `resources` - File and resource management
- `car_specifications` - Vehicle technical data
- `sponsors` - Sponsor information
- `gallery` - Image gallery management
- `achievements` - Team accomplishments

## 🚀 Getting Started

### Prerequisites
- Web server (Apache/Nginx)
- MySQL database
- PHP (for backend functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd WPL_PROJECT
   ```

2. **Set up the database**
   ```sql
   mysql -u username -p < database_schema.sql
   ```

3. **Configure web server**
   - Point document root to the project directory
   - Ensure PHP is enabled for backend functionality

4. **Access the website**
   - Open `http://localhost/` in your browser
   - Navigate through different sections

### Default Login Credentials
- **Admin**: admin@orionracing.com
- **Team Lead**: lead@orionracing.com
- **Member**: john@orionracing.com

*Note: Default password is hashed in the database schema*

## 📱 Pages Overview

### Public Pages
- **Landing (index.html)**: Interactive homepage with slideshow and circular navigation
- **About**: Team history and mission
- **Our Car**: Technical specifications and evolution timeline
- **Sponsors**: Platinum and Gold tier sponsors
- **Gallery**: Filtered photo gallery (Competitions, Cars, Team, Workshop)
- **Team**: Leadership and department structure

### Member Portal
- **Login (members.html)**: Secure authentication
- **Dashboard (member-dashboard.html)**: Personal dashboard with tasks and progress
- **Admin Panel (admin.html)**: Administrative interface

## 🎯 Key Features

### Interactive Elements
- **Circular Navigation**: Unique radial menu on landing page
- **Image Slideshow**: Auto-rotating background images
- **Responsive Menu**: Mobile-friendly hamburger navigation
- **Filter Gallery**: Category-based image filtering
- **Glass Morphism**: Modern translucent card designs

### User Roles
- **Admin**: Full system access
- **Team Lead**: Team management capabilities
- **Member**: Personal dashboard and team resources

## 🔧 Customization

### Adding New Team Members
1. Add member photo to `images/member/`
2. Update `team.html` with member information
3. Add database entry for login access

### Updating Car Specifications
1. Modify `car.html` specifications section
2. Update images in `images/` directory
3. Refresh evolution timeline as needed

### Gallery Management
1. Add images to appropriate `images/` subdirectories
2. Update `gallery.html` with new image references
3. Set appropriate `data-category` for filtering

## 📧 Contact

**Orion Racing India**
- Email: orionracing@somaiya.edu
- Phone: +91 9136347287
- Location: KJ Somaiya College of Engineering, Mumbai

**Social Media**
- [Instagram](https://www.instagram.com/orionracingin/?hl=en)
- [Facebook](https://www.facebook.com/orionracing/)
- [LinkedIn](https://in.linkedin.com/company/orionracingindia)

## 📄 License

© 2025 Orion Racing India. All Rights Reserved.

---