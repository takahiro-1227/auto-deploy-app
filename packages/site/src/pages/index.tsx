import { GetServerSideProps, NextPage } from 'next'
import { TopPage, TopPageProps } from '@/features/TopPage'
import { fetchAllMemos } from '@/helpers/fetchAllMemos';

const TopIndex: NextPage<TopPageProps> = props => <TopPage {...props} />;

export default TopIndex;

export const getServerSideProps: GetServerSideProps<TopPageProps> = async () => {
  const memos = await fetchAllMemos();

  return {
    props: {
      memos,
    }
  }
}
