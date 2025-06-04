import Header from "./components/shared/Header";
import MainContent from "./components/shared/MainContent";
import AiContextProvider from "./context/AiContext";

export default function App() {
  return (
    <AiContextProvider>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header />
        <MainContent />
      </div>
    </AiContextProvider>
  );
}
