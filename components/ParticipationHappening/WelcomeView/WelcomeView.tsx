import {Happening, Member} from "../../../pages/app/participation-happening"


interface ShareViewProps {
  happening: Happening;
  member: Member;
}
const WelcomeView = ({ happening, member }: ShareViewProps) => {
  return <p>Test</p>
}

export default WelcomeView
