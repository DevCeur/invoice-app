import { SideMenu } from '~/components/shared/side-menu';

type InvoiceLayoutProps = {
  children: React.ReactNode;
};

export const InvoiceLayout = ({ children }: InvoiceLayoutProps) => {
  return (
    <div className="w-full h-screen overflow-hidden relative ">
      <SideMenu />

      <main className="w-full h-[calc(100%-80px)] max-w-3xl mx-auto px-14 overflow-auto relative top-20">
        {children}
      </main>
    </div>
  );
};
