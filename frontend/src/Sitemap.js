import Sitemap from "react-router-sitemap";
import { paths } from "./paths";

// Generate the sitemap
function generateSitemap() {
  const sitemap = new Sitemap(paths);

  // Add the alphabetical order functionality
  const alphabeticallySortedPaths = paths.sort((a, b) =>
    a.path.localeCompare(b.path)
  );

  // Generate the sitemap XML
  const xml = sitemap.generate(alphabeticallySortedPaths).toString();

  // Save the sitemap XML to a file or use it as needed
  console.log(xml);
}

// Call the function to generate the sitemap
generateSitemap();
