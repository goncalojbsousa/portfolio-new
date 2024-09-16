import GameHub from "./gamehub";
import GESApp from "./ges-app";

function ProjectPage({ params }: { params: { project: string } }) {

  switch (params.project) {
    case 'gamehub-backlog':
      return (
        <GameHub />
      )
    case 'ges-app':
      return (
        <GESApp />
      )
  }
}

export default ProjectPage;