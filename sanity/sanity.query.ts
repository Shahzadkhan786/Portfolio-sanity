// // sanity/sanity.query.ts

// import { groq } from "next-sanity";
// import client from "./sanity.client";

// export async function getProfile() {
//   return client.fetch(
//     groq`*[_type == "profile"]{
//       _id,
//       fullName,
//       headline,
//       profileImage {alt, "image": asset->url},
//       shortBio,
//       location,
//       fullBio,
//       email,
//       "resumeURL": resumeURL.asset->url,
//       socialLinks,
//       skills
//     }`
//   );
// }

// console.log(getProfile())

import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  try {
    const profileData = await client.fetch(
      groq`*[_type == "profile"]{
        _id,
        fullName,
        headline,
        profileImage {alt, "image": asset->url},
        shortBio,
        location,
        fullBio,
        email,
        "resumeURL": resumeURL.asset->url,
        socialLinks,
        skills
      }`
    );
    return profileData;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

(async () => {
  const profile = await getProfile();
})();

//JobData

export async function getJob() {
  try {
    const JobData = await client.fetch(
      groq`*[_type == "job"]{
        _id,
        name,
        jobTitle,
        "logo": logo.asset->url,
        url,
        description,
        startDate,
        endDate,
      }`
    );
    return JobData;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

(async () => {
  const Job = await getJob();
})();




//ProjectData

export async function getSingleProject(slug:string) {
  try {
    const ProjectData = await client.fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        name,
        projectUrl,
        coverImage { alt, "image": asset->url },
        tagline,
        description
      }`,
      { slug }
    );
    return ProjectData;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

(async () => {
  const slug = "example-slug"
  const Project = await getSingleProject(slug);
})();


//Projects

export async function getProjects() {
  try {
    const Projects = await client.fetch(
      groq`*[_type == "project"]{
        _id, 
        name,
        "slug": slug.current,
        tagline,
        "logo": logo.asset->url,
      }`
    );
    return Projects;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

(async () => {
  const Project = await getProjects();
})();

