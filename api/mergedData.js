// for merged promises
import { getIdeaDet, getSingleIdea } from './ideaData';
import { getSingleProject } from './projectData';

const getIdeaDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleIdea(firebaseKey).then((ideaObj) => {
    getSingleProject(ideaObj.project_id).then((projectObj) => {
      resolve({ ...ideaObj, project: projectObj });
    }).catch(reject);
  }).catch(reject);
});

const getProjectDetails = async (firebaseKey) => {
  try {
    const project = await getSingleProject(firebaseKey);
    const ideas = await getIdeaDet(project.firebaseKey);

    return { ...project, ideas };
  } catch (error) {
    throw new Error(`Error fetching project details: ${error.message}`);
  }
};

export { getProjectDetails, getIdeaDetails };
