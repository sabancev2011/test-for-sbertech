'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {

  const { push } = useRouter()
  const searchParams = useSearchParams()
  
  const handleSearch = useDebouncedCallback((username: string) => {
    const params = new URLSearchParams(searchParams)
    username ? params.set('name', username) : params.delete('name')
    push(`/user?${params.toString()}`)
  }, 300)

  return (
    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
      <div className="relative flex flex-1 flex-shrink-0">
        <input
          className="peer block w-full rounded-md border border-blue-500 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get('name')?.toString()}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
    </div>
  );
}