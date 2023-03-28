import { gql } from "graphql-request"

export const GET_PROJECTS_QUERY = gql`
	query GetProjects {
		projects(first: 10) {
			desc
			date
			image {
				url
			}
			title
			technologies
			github
			content {
				html
			}
		}
	}
`