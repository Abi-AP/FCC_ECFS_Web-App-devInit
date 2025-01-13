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
  id: string;
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
  replies: Reply[]; // Ensure this property is included
  originalUrl: string;
  summaryUrl?: string;
}

export interface Reply {
  id: string;
  parentCommentId: string;
  title: string;
  author: string;
  dateSubmitted: string;
  content: string;
  originalUrl: string; // Ensure this is required
  summaryUrl: string;
  replies?: Reply[]; // Optional if replies can be nested
}