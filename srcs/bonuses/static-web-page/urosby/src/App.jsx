import { Layout } from "./components/Layout.jsx";
import { GeneralInformation } from "./components/GeneralInformation.jsx";
import { Skills } from "./components/Skills.jsx";
import { Education } from "./components/Education.jsx";
import { Profile } from "./components/Profile.jsx";
import { JobExperience } from "./components/JobExpierence.jsx";

function App() {

  return (
    <div>
      <Layout>
        <GeneralInformation />
        <div className="grid grid-cols-12 pt-6 gap-8">
          <div className="col-span-4">
            <Education />
            <Skills />
          </div>
          <div className="col-span-8 px-4 text-left">
            <Profile />
            <JobExperience />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default App;
