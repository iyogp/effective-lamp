import { useTennisClubs } from '@/helpers/helpers';

import ITennisClub from '@/interfaces/tennisclub';

export default function Home() {

  const { data, isLoading, isError } = useTennisClubs();

  if (isLoading) return <div>Loading tennis club data</div>;
  if (isError) return <div>Failed to load tennis club data</div>;
  if (!data) return null;

  const { tennisClubs } = data;

  return (
    <h1 className="text-3xl font-bold underline">
      {tennisClubs.map((tennisClub: ITennisClub, index: number) => (
        <div key={index}>{tennisClub.club}</div>
      ))}
    </h1>
  )

}