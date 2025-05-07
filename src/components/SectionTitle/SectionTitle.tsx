import { sectionTitle } from "../../styles/globalStyles.css";

const SectionTitle = ({title}: {title: string}) => <h1 className={sectionTitle}>{title}</h1>;

export default SectionTitle;