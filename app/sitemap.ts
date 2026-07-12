import { MetadataRoute } from 'next';

const baseUrl = 'https://www.digitonix.in';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/services',
    '/technologies',
    '/hireus',
    '/portfolio',
    '/careers'
  ];

  // Flat array of all service hrefs
  const serviceHrefs = [
    "/services/web-development", "/services/website-design", "/services/custom-web-development",
    "/services/ecommerce-development", "/services/cms-development", "/services/pwa-development",
    "/services/landing-pages", "/services/mobile-app-development", "/services/android-development",
    "/services/ios-development", "/services/react-native-development", "/services/flutter-development",
    "/services/hybrid-app-development", "/services/app-maintenance", "/services/software-development",
    "/services/custom-software", "/services/erp-solutions", "/services/crm-development",
    "/services/saas-development", "/services/enterprise-applications", "/services/ui-ux-design",
    "/services/ui-design", "/services/ux-research", "/services/wireframing", "/services/prototyping",
    "/services/product-design", "/services/digital-marketing", "/services/seo", "/services/local-seo",
    "/services/google-ads", "/services/social-media-marketing", "/services/email-marketing",
    "/services/content-marketing", "/services/cloud-devops", "/services/aws", "/services/azure",
    "/services/google-cloud", "/services/devops-consulting", "/services/ci-cd",
    "/services/server-management", "/services/ai-solutions", "/services/artificial-intelligence",
    "/services/machine-learning", "/services/chatbot-development", "/services/data-analytics",
    "/services/business-intelligence", "/services/cyber-security", "/services/security-audits",
    "/services/penetration-testing", "/services/network-security", "/services/application-security",
    "/services/cloud-security", "/services/support-maintenance", "/services/website-maintenance",
    "/services/application-support", "/services/performance-optimization", "/services/bug-fixing",
    "/services/technical-support"
  ];

  // Flat array of all technology hrefs
  const technologyHrefs = [
    "/technologies/reactjs", "/technologies/nextjs", "/technologies/vuejs", "/technologies/angular",
    "/technologies/typescript", "/technologies/nodejs", "/technologies/expressjs",
    "/technologies/python", "/technologies/django", "/technologies/laravel",
    "/technologies/react-native", "/technologies/flutter", "/technologies/android",
    "/technologies/ios", "/technologies/mongodb", "/technologies/postgresql",
    "/technologies/mysql", "/technologies/redis", "/technologies/firebase",
    "/technologies/aws", "/technologies/azure", "/technologies/gcp", "/technologies/docker",
    "/technologies/kubernetes"
  ];

  const hireus = [
    "/hireus/next-js-developer",
    "/hireus/node-js-developer",
    "/hireus/flutter-developer",
    "/hireus/react-native-dev",
    "/hireus/python-developer",
    "/hireus/laravel-developer",
    "/hireus/wordpress-developer",
    "/hireus/ui-ux-designer",
    "/hireus/devops-engineer",
    "/hireus/aws-cloud-architect",
    "/hireus/database-engineer",
    "/hireus/ios-developer",
    "/hireus/android-developer",
    "/hireus/cybersecurity-expert",
    "/hireus/data-analyst"
  ]


  return [...routes, ...serviceHrefs, ...technologyHrefs, ...hireus].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}