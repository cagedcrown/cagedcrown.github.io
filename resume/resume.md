---
layout: header-image-post
permalink: /resume/
---

<head lang="en">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Maury Lindo's Resume</title>
  <meta name="description" content="Resume of Maury T. Lindo">
</head>

<div class="resume-wrapper" itemscope itemtype="http://schema.org/Person">
  <header class="resume-page-header">
    <!-- You can turn off the avatar in _config.yml by setting to false -->
    <img src="/img/headshot.png" alt="my photo" class="resume-avatar" itemprop="image">
    <!-- Your name is defined in the _config.yml file -->
    <h1 class="resume-header-name" itemprop="name">Maury T. Lindo</h1>
    <div class="resume-title-bar">
      <!-- Your title is also defined in the _config.yml file -->
      <h2 class="resume-header-title" itemprop="jobTitle">Front-End Engineer</h2>
      <!-- This is the markup for the icon links; moved out to an include because it's very verbose, and you shouldn't ever need to edit the markup (unless you want to re-order the icons); if you want to customize which links appear, define them in the _config.yml file -->
      {% include icon-links.html %}
    </div>
    <div class="resume-executive-summary" itemprop="description">
      <p class="resume-p">Multimedia artist turned Front-End Engineer who aims to create visually stunning and interactive websites. Insatiable learner who has a passion for JavaScript, Ruby, and personal growth. Proven ability to work in a team setting while being able to prioritize work.</p>
    </div>
    <a href="mailto:mo@cagedcrown.com" class="resume-contact-button" itemprop="email">Contact me</a>
    <!-- <a class="resume-contact-button-not-looking">I'm not looking for work right now.</a> -->
  </header>

  <!-- begin Skills -->
  <section class="resume-content-section">
    <header class="resume-section-header">
      <h2>Skills</h2>
    </header>
    <table class="skills-table">
      <thead>
        <tr>
          <th>Languages</th>
          <th>Frameworks</th>
          <th>Libraries</th>
          <th>Database</th>
          <th>Adobe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Languages">JavaScript, Ruby, HTML, CSS</td>
          <td data-label="Frameworks">Ruby on Rails, Angular, Node</td>
          <td data-label="Libraries">React, jQuery, Sass</td>
          <td data-label="Database">SQL, PostgreSQL, ActiveRecord</td>
          <td data-label="Adobe">Photoshop, Illustrator, After Effects</td>
        </tr>
      </tbody>
    </table>
  </section>
  <!-- end Skills -->

  <!-- begin Experience -->
  <section class="resume-content-section">
    <header class="resume-section-header">
      <h2>Experience</h2>
    </header>
    <!-- Duplicate these resume-item elements and edit accordingly for each job you want to add here -->
    <div class="resume-item" itemscope itemprop="worksFor" itemtype="http://schema.org/Organization">
      <h3 class="resume-item-title" itemprop="name">LivingSocial</h3>
      <h4 class="resume-item-details" itemprop="description">Software Engineer &bull; Jun, 2015 &mdash; May, 2016</h4>
      <p class="resume-item-copy">Tasked with updating and improving LivingSocial’s Merchant Portal while on the Merchant Center team. Duties included:</p>
      <ul class="resume-item-list">
        <li>Rotational On-Call Responsibility for triaging production issues from support, prioritizing them, then implementing and communicating fixes to numerous stakeholders</li>
        <li>Managed and maintained the Front-End for four large-scale applications</li>
        <li>Collaborated with UX and Marketing departments to create high quality site updates and redesigns</li>
        <li>Estimated effort/risk for new features and projects and provided reports/recommendations to management</li>
        <li>Released newversions of custom livingsocial gems</li>
        <li>Responsive UI for mobile and tablet screens</li>
      </ul>
    </div><!-- end of resume-item -->

    <!-- another resume item -->
    <div class="resume-item" itemscope itemprop="worksFor" itemtype="http://schema.org/Organization">
      <h3 class="resume-item-title" itemprop="name">General Assembly</h3>
      <h4 class="resume-item-details" itemprop="description">Web Development Immersive &bull; Nov, 2014 &mdash; Mar, 2015</h4>
      <p class="resume-item-copy">Full-Stack web development program focused on common best practices in object-oriented programming, MVC frameworks, data modeling, and test-driven development. Developed a portfolio of individually focused and collaboratively focused projects.</p>
    </div><!-- end of resume-item -->

    <!-- by now you're getting the picture... -->
    <div class="resume-item" itemscope itemprop="worksFor" itemtype="http://schema.org/Organization">
      <h3 class="resume-item-title" itemprop="name">VueCare Media, LLC</h3>
      <h4 class="resume-item-details" itemprop="description">Multimedia Producer &bull; May, 2013 &mdash; Oct, 2014</h4>
      <p class="resume-item-copy">Created patient education content through the use of scientific animations and broadcast-quality motion design.</p>
      <ul class="resume-item-list">
        <li>Web Design and Development</li>
        <li>2D and 3D Animation</li>
        <li>UI/UX Design</li>
        <li>iPad App Development</li>
      </ul>
    </div><!-- end of resume-item -->

    <!-- another resume item -->
    <div class="resume-item" itemscope itemprop="worksFor" itemtype="http://schema.org/Organization">
      <h3 class="resume-item-title" itemprop="name">Risk and Strategic Management, Corp</h3>
      <h4 class="resume-item-details" itemprop="description">3D Animation Intern &bull; May, 2012 &mdash; May, 2013</h4>
      <p class="resume-item-copy">Full-Stack web development program focused on common best practices in object-oriented programming, MVC frameworks, data modeling, and test-driven development. Developed a portfolio of individually focused and collaboratively focused projects.</p>
    </div><!-- end of resume-item -->
  </section>
  <!-- end Experience -->

  <!-- begin Education -->
  <section class="resume-content-section">
    <header class="resume-section-header">
      <h2>Education</h2>
    </header>
    <div class="resume-item" itemscope itemprop="worksFor" itemtype="http://schema.org/CollegeOrUniversity">
      <h3 class="resume-item-title" itemprop="name">General Assembly</h3>
      <h4 class="resume-item-details" itemprop="description">Web Development Immersive &bull; 2014 &mdash; 2015</h4>
      <p class="resume-item-copy">12-week intensive course that builds fluency in full stack web development with emphasis on work-ready skill set.</p>
    </div>
    <div class="resume-item" itemscope itemprop="worksFor" itemtype="http://schema.org/CollegeOrUniversity">
      <h3 class="resume-item-title" itemprop="name">University of Maryland, Baltimore County</h3>
      <h4 class="resume-item-details" itemprop="description">BFA Interactive Media/Animation &bull; 2011 &mdash; 2013</h4>
      <p class="resume-item-copy">Animation/Interactive Media calls upon the theories and artistic practices of animation, cinema, motion graphics, games and technology.</p>
    </div>
    <div class="resume-item" itemscope itemprop="worksFor" itemtype="http://schema.org/CollegeOrUniversity">
      <h3 class="resume-item-title" itemprop="name">Prince George’s Community College</h3>
      <h4 class="resume-item-details" itemprop="description">Graphic Design &bull; 2009 &mdash; 2011</h4>
      <p class="resume-item-copy">Produced print and screen-based graphics for commercial purposes using traditional and digital tools.</p>
    </div>
  </section>
  <!-- end Education -->

  <!-- begin Projects -->
  <!-- <section class="resume-content-section">
    <header class="resume-section-header">
      <h2>Projects</h2>
    </header>
    <div class="resume-item">
      <h3 class="resume-item-title"><a href="http://donutlocator.io">donutfinder.io</a></h3>
      <h4 class="resume-item-details">Founder & Primary Developer &bull; 2012 &mdash; Present</h4>
      <p class="resume-item-copy">Donut Locator is an open source node/ember app that lets users find donuts within a defined radius from their home.</p>
    </div>
    <div class="resume-item">
      <h3 class="resume-item-title">Springfield Donut Eater's User Group</h3>
      <h4 class="resume-item-details">Co-Founder & Organizer &bull; 2007 &mdash; Present</h4>
      <p class="resume-item-copy">DEUG is a local monthly meetup in Springfield where we share all the latest tips and tricks for dat donut lifestyle. I organize the group, and typically eat most of the donuts.</p>
    </div>
  </section> -->
  <!-- end Projects -->

  <!-- begin Recognition -->
  <!-- <section class="resume-content-section">
    <header class="resume-section-header">
      <h2>Recognition</h2>
    </header>
    <div class="resume-item">
      <h3 class="resume-item-title" itemprop="award">Springfield Nuclear Power Plant</h3>
      <h4 class="resume-item-details">Outstanding Achievement &bull; 2010</h4>
      <p class="resume-item-copy">Awarded for stopping a nuclear meltdown, even though I also started it.</p>
    </div>
    <div class="resume-item">
      <h3 class="resume-item-title" itemprop="award">Duff Beer Customer of the year</h3>
      <h4 class="resume-item-details">1997 &mdash; 2001, 2003, 2008 &mdash; 2012</h4>
      <p class="resume-item-copy">Honored by <a href="https://en.wikipedia.org/wiki/Duff_Beer">Duff Beer</a> for being an outstanding customer several years straight. Qualifications included most beer consumed at a bar, most beer purchased, and most beer ralphed.</p>
    </div>
    <div class="resume-item">
      <h3 class="resume-item-title" itemprop="award">Moe's Patron of the Month</h3>
      <h4 class="resume-item-details">12/2001, 8/2004</h4>
      <p class="resume-item-copy">Specifically this prestigious awarded twice for stopping a robber with my belly.</p>
    </div>
  </section> -->
  <!-- end Recognition -->

  <!-- begin Associations -->
  <!-- <section class="resume-content-section">
    <header class="resume-section-header">
      <h2>Associations</h2>
    </header>
    <div class="resume-item">
      <h3 class="resume-item-title"><a href="http://beerfortheworld.com">Beer for the World</a></h3>
      <h4 class="resume-item-details">Volunteer &bull; 2008 &mdash; Present</h4>
      <p class="resume-item-copy">Organized fund drives and participated in fundraising events for the benefit of families in third world countries without proper access to malt beverages.</p>
    </div>
    <div class="resume-item">
      <h3 class="resume-item-title">Springfield Nuclear Workers Labor Union</h3>
      <h4 class="resume-item-details">Member in Good Standin &bull; 1994 &mdash; Present</h4>
      <p class="resume-item-copy">Founding member of the local nuclear workers labor union.</p>
    </div>
  </section> -->
  <!-- end Associations -->

  <!-- begin Links -->
  <!-- <section class="resume-content-section">
    <header class="resume-section-header">
      <h2>Additional Links</h2>
    </header>
    <div class="resume-item">
      <ul class="resume-item-list">
        <li><a href="#">Springfield Poker Club</a></li>
        <li><a href="#">Springfield Donut Eater's User Group</a></li>
      </ul>
    </div>
  </section> -->
  <!-- end Links -->

  <footer class="resume-page-footer">
    <div class="logo">
      <a href="/">
        <svg class="resume-footer-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" display="block" margin="auto" width="75" height="75" viewBox="0 0 2141.8 1471.8" enable-background="new 0 0 2141.8 1471.8" xml:space="preserve">
          <polygon fill="#009999" points="1059,1145 662.2,819.7 1059,351.5 1059,1145"/>
          <polygon fill="#76CEDE" points="265.4,494.4 662.2,819.7 265.2,819.7"/>
          <polygon fill="#006666" points="265.3,1288.7 662.2,819.7 1059,1145"/>
          <polygon fill="#008E89" points="1852.5,998.5 1455.7,675.6 1852.4,210.7"/>
          <polygon fill="#013333" points="1059,1145 1455.7,675.6 1852.5,998.5 1059,1145"/>
          <polygon fill="#76CEDE" points="1058.8,352.7 1455.7,675.6 1059,675.6"/>
        </svg>
      </a>
    </div>
  </footer>
</div>
