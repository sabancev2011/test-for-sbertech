import Link from 'next/link';
import Image from 'next/image';

import { lusitana } from '../fonts';

export default function UserInfo({ user, repos }: any) {
  return (
    <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
      <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-4/5">
        <div className="flex items-center">
          <Image
            src={user.avatar_url}
            alt={`${user.username}'s profile picture`}
            className="mr-4 rounded-full"
            width={80}
            height={80}
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold md:text-base">
              {user.username}
            </p>
            <p className="hidden text-sm text-gray-500 sm:block">
              {user.email}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:w-3/5">
      <p className={`${lusitana.className} text-xl font-semibold text-gray-800 md:text-3xl md:leading-normal`}>
        Repos
      </p>
        <div className="bg-white">
          {repos.map((repo: any) => {
            return (
              <Link href={`/user/${user.username}/repo/${repo.name}`} key={repo.id} className='flex flex-row items-center justify-between py-4'>
                <p className="truncate text-sm font-semibold md:text-base">
                  {repo.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}