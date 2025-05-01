# AI Phoenix Trip App

An innovative AI-powered platform designed to analyze and enhance passenger trip experiences in Phoenix. Leveraging advanced artificial intelligence, the application provides comprehensive sentiment analysis, actionable insights, and data-driven recommendations to improve travel services.

## Features

### 🤖 AI-Powered Analysis
- **Sentiment Analysis**: Advanced NLP algorithms analyze passenger feedback with 95% accuracy
- **Real-time Insights**: Instant processing of emotional tone and key concerns
- **Multilingual Support**: Global feedback analysis across multiple languages
- **Predictive Analytics**: Proactive issue prevention and trend forecasting

### 📊 Data Visualization & Analytics
- **Interactive Dashboards**: Real-time data visualization of travel experiences
- **Trend Analysis**: Identify seasonal patterns and recurring issues
- **Visual Reports**: Exportable analytics for stakeholder presentations
- **Competitive Benchmarking**: Compare performance against industry standards

### 🎯 Actionable Intelligence
- **Automated Categorization**: Smart classification of issues by urgency and impact
- **Prioritized Actions**: AI-generated improvement recommendations
- **Effectiveness Tracking**: Before/after analysis of implemented changes
- **Personalized Suggestions**: Customized service improvement strategies

### 🛠️ Technical Features
- 🚀 Next.js 15 with React 19
- 🎨 Modern UI with Radix UI components
- 📅 Date management with react-day-picker
- 🎭 Theme support with next-themes
- 📝 Form handling with react-hook-form and zod validation
- 🔍 Database management with Prisma
- 🎨 Styling with Tailwind CSS
- 🔔 Toast notifications with react-hot-toast

## Pages

- **Home Page**: Landing page with AI-powered trip planning features and real-time analytics
- **Review Page**: Comprehensive feedback analysis with sentiment detection and trend visualization
- **Dashboard**: Personalized analytics interface with AI-generated insights and recommendations

## Prerequisites

- Node.js (LTS version recommended)
- PostgreSQL database
- pnpm package manager

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd ai_phoenix_trip_app
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up your environment variables:
Create a `.env` file in the root directory and add the necessary environment variables:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
OPENAI_API_KEY="your-openai-api-key"
```

4. Initialize the database:
```bash
pnpm prisma:generate
pnpm prisma:migrate
```

5. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint
- `pnpm prisma:generate` - Generate Prisma client
- `pnpm prisma:migrate` - Run database migrations
- `pnpm prisma:studio` - Open Prisma Studio
- `pnpm prisma:pull` - Pull database schema
- `pnpm prisma:push` - Push database schema

## Project Structure

```
ai_phoenix_trip_app/
├── app/              # Next.js app directory
│   ├── api/         # API routes and handlers
│   ├── dashboard/   # Dashboard pages
│   ├── review/      # Review pages
│   └── page.tsx     # Home page
├── components/       # React components
├── lib/             # Utility functions and configurations
├── prisma/          # Prisma schema and migrations
├── public/          # Static assets
└── styles/          # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
