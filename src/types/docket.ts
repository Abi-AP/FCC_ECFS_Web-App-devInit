export interface Docket {
  name: string;
  description_display: string;
  date_proceeding_created: string;
  bureau: {
    name: string;
    code: string;
  };
}

export interface DocumentSummary {
  title: string;
  content: string;
  originalUrl: string;
  summaryUrl?: string;
}

export interface Comment {
  id: string;
  title: string;
  author: string;
  dateSubmitted: string;
  content: string;
  replies: string;
  originalUrl: string;
  summaryUrl?: string;
}

export interface Reply extends Comment {
  parentCommentId: string;
}