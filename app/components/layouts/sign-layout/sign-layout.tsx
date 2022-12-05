type SignLayoutProps = {
  children: React.ReactNode;
};

export const SignLayout = ({ children }: SignLayoutProps) => {
  return (
    <div>
      <header>Invoice App</header>

      <main>{children}</main>
    </div>
  );
};
