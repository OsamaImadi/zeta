import { Project as TProject } from "../api/project/Project";

export const PROJECT_TITLE_FIELD = "appName";

export const ProjectTitle = (record: TProject): string => {
  return record.appName || String(record.id);
};
