import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'th', name: 'ไทย' },
  { code: 'zh', name: '中文' },
  { code: 'ru', name: 'Русский' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center text-gray-700 hover:text-indigo-600">
        <Globe className="h-5 w-5 mr-1" />
        <span className="hidden md:inline">{languages.find(lang => lang.code === i18n.language)?.name || 'EN'}</span>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languages.map((language) => (
              <Menu.Item key={language.code}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } group flex w-full items-center px-4 py-2 text-sm`}
                    onClick={() => i18n.changeLanguage(language.code)}
                  >
                    {language.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}