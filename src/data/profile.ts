
 // Single source of truth for the entire portfolio

export interface ProfileData {
  basics: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    picture?: string;
    links: Array<{
      label: string;
      url: string;
      icon?: string;
    }>;
  };

  skills: Array<{
    name: string;
    level: number;
  }>;

  experience: Array<{
    role: string;
    company: string;
    location?: string;
    start: string;
    end: string;
    bullets: string[];
  }>;

  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    link?: string;
    image?: string;
  }>;

  education: Array<{
    institution: string;
    degree: string;
    field: string;
    start: string;
    end: string;
    location?: string;
    gpa?: string;
    achievements?: string[];
  }>;

  contact: {
    email: string;
    phone: string;
    location: string;
    availability: string;
    message?: string;
  };
}

const profile: ProfileData = {
  // ----------------------------------
  // PERSONAL INFORMATION
  // ----------------------------------
  basics: {
    name: "Amarnath",
    title: "AI Engineer | Generative AI | Machine Learning",

    email: "anamarnath96@gmail.com",
    phone: "+91-9670521383",
    location: "Lucknow, India",

    summary:
      "AI & Machine Learning developer with practical experience in designing and developing intelligent applications using Python, Machine Learning, Deep Learning, and Generative AI. Skilled in building RAG-based systems, LLM-powered applications, and agentic workflows using LangChain and LangGraph. Experienced in integrating AI models with backend services to develop functional, data-driven applications that address real-world challenges.",

    // TODO: Update this path according to your actual portfolio project.
    // Prefer a public image path such as "/images/profile.jpg".
    picture: "/Photo.jpeg",

    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/amarnath-652509336/",
      },
      {
        label: "GitHub",
        url: "https://github.com/anrajvarun9838",
      },

      // TODO: Add your portfolio website URL if available.
      { label: "Portfolio", url: "https://portfolio-amarnath-lz1kzqq1q9.vercel.app/" },
    ],
  },

  // ----------------------------------
  // TECHNICAL SKILLS
  // ----------------------------------
  skills: [
    { name: "Python", level: 90 },
    { name: "Generative AI", level: 85 },
    { name: "LLMs", level: 85 },
    { name: "RAG", level: 85 },
    { name: "LangChain", level: 85 },
    { name: "LangGraph", level: 80 },
    { name: "Prompt Engineering", level: 85 },
    { name: "Machine Learning", level: 85 },
    { name: "Deep Learning", level: 80 },
    { name: "NLP", level: 75 },
    { name: "TensorFlow", level: 80 },
    { name: "Scikit-learn", level: 85 },
    { name: "Pandas", level: 85 },
    { name: "NumPy", level: 85 },
    { name: "FastAPI", level: 80 },
    { name: "Streamlit", level: 75 },
    { name: "PostgreSQL", level: 75 },
    { name: "MySQL", level: 75 },
    { name: "Docker", level: 70 },
    { name: "Git & GitHub", level: 85 },
    { name: "AWS Cloud", level: 60 },
  ],

  // ----------------------------------
  // EXPERIENCE
  // ----------------------------------
  experience: [
    {
      role: "Artificial Intelligence Intern",
      company: "Springer Capital Investments LLC",
      location: "Remote",

      start: "Apr 2026",
      end: "Jun 2026",

      bullets: [
        "Analyzed a company-provided employee email dataset containing 2,191 records using Python, Pandas, NumPy, and NLTK VADER to quantify sentiment and identify monthly performance trends.",

        "Engineered sentiment scoring, employee ranking, and rolling 30-day flight-risk analysis to identify top and bottom performers and flag repeated negative communication patterns.",

        "Built predictive regression models using Scikit-learn, achieving an R² score of 0.71, MAE of 1.42, and RMSE of 1.82.",

        "Visualized sentiment distributions, employee trends, and analytical findings using Matplotlib and Seaborn.",
      ],
    },

    {
      role: "DefSpace Summer Intern",
      company: "Bharat Space Education Research Centre (BSERC)",
      location: "Remote",

      start: "Jul 2026",
      end: "Aug 2026",

      bullets: [
        "Developed an AI-based intelligence and threat-analysis dashboard using Python, Pandas, exploratory data analysis, machine learning, and interactive data visualization.",

        "Engineered data preprocessing and feature analysis workflows to transform structured datasets into model-ready inputs and analytical insights.",

        "Implemented machine learning and visualization modules for threat assessment, prediction, trend analysis, and decision-support reporting.",

        "Worked on AI applications in defence and space technology through the DefSpace Summer Internship Program.",
      ],
    },
  ],

  // ----------------------------------
  // PROJECTS
  // ----------------------------------
  projects: [
    {
      name: "Brain Tumor Recognition & AI Medical Assistant",

      description:
        "Developed a deep learning-based brain tumor classification system using VGG16 transfer learning to classify MRI images into Glioma, Meningioma, Pituitary Tumor, and No Tumor categories. Integrated a Groq-powered LLM medical information assistant and deployed the model through a Flask web application with image upload and prediction functionality. Evaluated the model on 1,311 test images, achieving 95% accuracy and a 0.95 weighted F1-score.",

      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "VGG16",
        "Deep Learning",
        "Flask",
        "Groq API",
        "LLMs",
      ],

      link: "https://github.com/anrajvarun9838/Brain-Tumor-Recognition-System",
    },

    {
      name: "IntelliChat AI – Conversational RAG Assistant",

      description:
        "Built a multi-user conversational AI assistant with a reusable knowledge base supporting PDF, TXT, and DOCX documents. Implemented Retrieval-Augmented Generation for cross-chat document retrieval and source-cited answers. Developed a LangGraph agent workflow with calculator, web search, weather, Wikipedia, and currency conversion tools.",

      technologies: [
        "Python",
        "LangChain",
        "LangGraph",
        "RAG",
        "LLMs",
        "Vector Search",
        "Tool Calling",
        "Agentic AI",
      ],

      link: "https://github.com/anrajvarun9838/IntelliChat-AI",
    },

    {
      name: "TripMate AI – Multi-Agent Travel Assistant",

      description:
        "Designed a LangGraph-based multi-agent travel assistant with a supervisor workflow to classify requests, extract travel constraints, and coordinate specialized flight, hotel, weather, budget, and itinerary agents. Integrated external services through three MCP servers using Tavily, AviationStack, and a custom FastMCP weather server. Built a FastAPI backend and interactive web interface with human-in-the-loop itinerary approval, itinerary revision, PDF export, and PostgreSQL-based conversation persistence.",

      technologies: [
        "Python",
        "LangGraph",
        "LangChain",
        "MCP",
        "FastMCP",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "Multi-Agent Systems",
      ],

      link: "https://github.com/anrajvarun9838/TripMate-AI",
    },

    {
  name: "AI-Based Military Intelligence & Threat Analysis Dashboard",

  description:
    "Developed an interactive intelligence analytics dashboard using the Global Terrorism Database (GTD) to analyze historical incident patterns and support data-driven insights. Implemented attack-type prediction using CatBoost, threat-level classification using Extra Trees, and historical trend forecasting using Polynomial Regression. Built dashboard modules for global threat mapping, country analysis, attack prediction, threat assessment, forecasting, AI intelligence reports, and data exploration.",

  technologies: [
    "Python",
    "Machine Learning",
    "CatBoost",
    "Extra Trees",
    "Polynomial Regression",
    "Pandas",
    "Plotly",
    "Streamlit",
    "Data Visualization",
  ],

  link: "https://github.com/anrajvarun9838/AI-Military-Intelligence-Dashboard",
},

{
  name: "Stock Price Prediction using LSTM",

  description:
    "Developed a time-series forecasting model using approximately 10 years of historical stock market data. Performed data cleaning, normalization, and 60-day sliding-window sequence generation for supervised learning. Designed a stacked LSTM neural network with dropout regularization and Adam optimization to predict stock price trends. Evaluated model performance using RMSE and visualized actual versus predicted stock prices.",

  technologies: [
    "Python",
    "TensorFlow",
    "Keras",
    "LSTM",
    "Deep Learning",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib",
  ],

  link: "https://github.com/anrajvarun9838/Stock-Price-Prediction-using-LSTM",
},

{
  name: "Virtual Mouse Control",

  description:
    "Developed a touchless human-computer interaction system that enables mouse control through real-time hand tracking and computer vision. Implemented gesture-based cursor movement and mouse actions using hand landmarks, providing an alternative way to interact with a computer without a physical mouse.",

  technologies: [
    "Python",
    "OpenCV",
    "MediaPipe",
    "Computer Vision",
    "Hand Tracking",
    "Gesture Recognition",
    "Human-Computer Interaction",
  ],

  link: "https://github.com/anrajvarun9838/virtualMouseControl",
},


    // TODO: Add other projects if you want them displayed.
    // Example: Stock Price Prediction using LSTM
    // Example: AI Military Intelligence Dashboard
  ],

  // ----------------------------------
  // EDUCATION
  // ----------------------------------
  education: [
    {
      institution: "Bansal Institute of Engineering and Technology",

      degree: "Bachelor of Technology (B.Tech)",

      field:
        "Computer Science & Engineering – (Artificial Intelligence and Machine Learning)",

      start: "2023",
      end: "2027",

      location: "Lucknow, India",
    },
  ],

  // ----------------------------------
  // CONTACT
  // ----------------------------------
  contact: {
    email: "anamarnath96@gmail.com",

    phone: "+91-9670521383",

    location: "Lucknow, India",

    availability: "Open to AI Engineer, Generative AI Engineer, and Machine Learning opportunities",

    message:
      "Interested in AI, Generative AI, RAG, LangChain, LangGraph, and building practical AI applications. Feel free to connect for technical discussions, project collaborations, internships, and career opportunities.",
  },
};

export default profile;
