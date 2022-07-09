import React from 'react';
import { Disclosure } from '@headlessui/react';

export default function App() {
  return (
    <div className="w-full px-4 pt-32">
      <div className="mx-auto w-full max-w-md rounded-sm bg-white p-6">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-sm bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-green-200">
                <span>ここに質問が入ります</span>
                <span>+</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black-500">
                あいうえおかきくけこさしすせそ
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-sm bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-green-200">
                <span>ここに質問が入ります</span>
                <span>+</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black-500">
                あいうえおかきくけこさしすせそ
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-sm bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-green-200">
                <span>ここに質問が入ります</span>
                <span>+</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black-500">
                あいうえおかきくけこさしすせそ
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
