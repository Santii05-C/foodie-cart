import { gql, request } from "graphql-request";

const MASTER_URL = process.env.NEXT_PUBLIC_BACKEDN_API_URL;

const GetCategory = async () => {
  const query = gql`
    query Categories {
      categories(first: 50) {
        id
        slug
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const GetBusiness = async (category) => {
  const query =
    gql`
    query GetBusiness {
      restaurants(where: { categories_some: { slug: "` +
    category +
    `" } }) {
        aBoutUs
        address
        banner {
          url
        }
        categories {
          name
        }
        id
        name
        restroType
        slug
        workingHours
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  GetCategory,
  GetBusiness,
};
