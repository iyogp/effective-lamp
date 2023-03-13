import useSWR from 'swr';

const fetcher = (api: string) => fetch(`${process.env.API_URL! + api}`).then((res) => res.json());

export const useTennisClubs = () => {

    const { data, error, isLoading } = useSWR('/api/get/tennisclub', fetcher);

    return {
        data: data,
        isLoading: isLoading,
        isError: error
    }

}