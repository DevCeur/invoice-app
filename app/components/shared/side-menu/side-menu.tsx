import { ThemeButton } from '../theme-button';

export const SideMenu = () => {
  return (
    <div className="w-24 h-full bg-purple-dark dark:bg-overlay-dark-background flex flex-col justify-between items-center rounded-tr-3xl rounded-br-3xl absolute top-0 left-0">
      <div></div>

      <div className="w-full flex flex-col justify-center items-center">
        <ThemeButton />

        <div className="w-full py-6 mt-6 border-t border-gray-600 flex justify-center items-center">
          <span className="inline-block w-10 h-10 rounded-full bg-purple-darkest" />
        </div>
      </div>
    </div>
  );
};
