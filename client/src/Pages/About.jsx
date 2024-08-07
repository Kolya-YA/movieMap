const About = () => {
  return (
    <div className="text-white text-center [&>p]:text-pretty p-8 max-w-4xl mx-auto">
      <p>We adhered to the latest standards throughout our development.</p>
      <p>Explore our code on our <a href="https://github.com/Kolya-YA/movieMap" className="text-blue-300" target="_blank" rel="noopener noreferrer">GitHub Repository.</a></p>
      
      <p className="pt-8">Our future plans for further development include:</p>
      <ul className="grid gap-2 pb-8 pt-4">
        <li>Implement a billing system for paid user subscriptions</li>
        <li>Enhance User Experience and Interface</li>
        <li>
        Add Series in the search results.
        </li>
        <li>Extend our project to PWA.</li>
        <li>Add sharing functionality.</li>
        <li>Improve Desktop layouts.</li>
        <li>Improve AI functionality.</li>
      </ul>
      <h1 className="text-4xl font-bold mb-4">About Our App</h1>
      <p className="mb-4 text-lg text-pretty">
        Welcome to our application, designed to be clean, simple, and intuitive.
        We leverage the latest technologies to offer you AI-generated advice
        based on your country, age, and favorite movies from your lists. Our
        goal is to provide you with personalized recommendations to enhance your
        movie-watching experience.
      </p>
      <p className="mb-4 text-lg">
        Our application also allows you to keep track of your watch list and
        build a library of all the movies you have watched. You can add comments
        and ratings to each movie, so you can always remember your thoughts and
        impressions from your last viewing.
      </p>
      <p className="text-lg">
        With our app, you have a comprehensive tool to manage your movie
        preferences and discover new films tailored just for you. Enjoy the
        journey of exploring and cataloging your favorite movies with ease and
        efficiency.
      </p>
      <h2 className="text-3xl font-bold my-4">Meet Our Team</h2>
      <p className="mb-2 text-lg">Application created by:</p>
      <ul className="flex-col mb-4 text-lg">
        <li className="flex gap-4 justify-center">
            <p>Nikolay Kolomyytsev</p>
            <a href="https://www.linkedin.com/in/nikolay-kolomyytsev" className="text-blue-300" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li className="flex gap-4 justify-center"><p>Hyeongwook Jang</p><a href="https://www.linkedin.com/in/hyeong-wook-j-5b996b230" className="text-blue-300" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li className="flex gap-4 justify-center"><p>Vladimir Gerov</p><a href="https://www.linkedin.com/in/vladimir-gerov2024" className="text-blue-300" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
      <p className="mb-4 text-lg">
        We are a team of three junior full-stack web developers, passionate about coding and eager to make our mark in the tech industry. As we embark on our programming journeys, we've been driven by a shared enthusiasm for learning and collaboration.
      </p>
      <p className="mb-4 text-lg">
        This application represents the culmination of our hard work during the final project of our intensive three-month bootcamp from WBS Coding School. Over the past two weeks, we've embraced the challenge of transforming an idea into a fully deployed and functional product. This project has not only honed our technical skills but also taught us the value of teamwork, communication, and perseverance.
      </p>
      <p className="text-lg">
        Together, we've navigated the complexities of full-stack development, combining our individual strengths to create something we're proud of. We're excited to continue growing as developers and look forward to many more projects in the future.
      </p>
    </div>
  );
};

export default About;
