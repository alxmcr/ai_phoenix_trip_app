import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resource Attributions | Phoenix Trip",
  description: "Acknowledgements and attributions for resources used in Phoenix Trip",
};

export default function AttributionsPage() {
  const attributions = [
    {
      title: "Travel Vectors",
      link: "https://www.vecteezy.com/free-vector/travel",
      provider: "Vecteezy",
    },
    {
      title: "Background Vectors",
      link: "https://www.vecteezy.com/free-vector/background",
      provider: "Vecteezy",
    },
    {
      title: "Hawaii Vectors",
      link: "https://www.vecteezy.com/free-vector/hawaii",
      provider: "Vecteezy",
    },
    {
      title: "Logo Resources",
      link: "https://worldvectorlogo.com/",
      provider: "Worldvectorlogo",
    },
    {
      title: "Sunset Vectors",
      link: "https://www.vecteezy.com/free-vector/sunset",
      provider: "Vecteezy",
    },
    {
      title: "Mountain Night Vectors",
      link: "https://www.vecteezy.com/free-vector/mountain-night",
      provider: "Vecteezy",
    },
  ];

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Resource Attributions</h1>
      <p className="text-muted-foreground mb-8">
        We would like to acknowledge and thank the following resources for their contributions to our project:
      </p>
      <div className="grid gap-6">
        {attributions.map((attribution, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg hover:border-primary transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{attribution.title}</h2>
            <p className="text-muted-foreground mb-2">
              Provided by: {attribution.provider}
            </p>
            <a
              href={attribution.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-2"
            >
              Visit Resource
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}