import getProjectList from '../../@utils/getProjectList'
import Project from './Project'

const CareersPortfolio = async () => {
  const projectList = await getProjectList()

  return (
    <div className="flex flex-col gap-10">
      {projectList.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
}
export default CareersPortfolio
