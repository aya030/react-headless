import React from 'react';
import { Disclosure } from '@headlessui/react';

export default function App() {
  const lists = [
    {
      id: 1,
      question: 'ここに質問が入ります1',
      answer: 'answer1answer1answer1',
    },
    {
      id: 2,
      question: 'ここに質問が入ります2',
      answer: 'answer2answer2answer2',
    },
    {
      id: 3,
      question: 'ここに質問が入ります3',
      answer: 'answer3answer3answer3',
    },
  ];

  return (
    <div className="w-full px-4 pt-32">
      <div className="mx-auto w-full max-w-md rounded-sm bg-white p-6">
        <p>よくある質問</p>
        {lists.map((list) => (
          <Disclosure key={list.id} as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-sm bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-green-200">
                  <span>{list.question}</span>
                  <span>+</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black-500">
                  {list.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
