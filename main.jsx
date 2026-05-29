/* main — design canvas with the homepage directions */
function StubBoard({ label }) {
  return (
    <div className="toc-ph" style={{ width: "1440px", height: "100%", minHeight: "900px", fontSize: "15px" }}>
      {label} — en cours de construction
    </div>
  );
}
window.HomeB = window.HomeB || (() => <StubBoard label="Direction B" />);
window.HomeC = window.HomeC || (() => <StubBoard label="Direction C" />);

function App() {
  return (
    <DesignCanvas>
      <DCSection
        id="home"
        title="The One Community — Page d'accueil"
        subtitle="3 directions à comparer · cliquez ⤢ pour ouvrir une maquette en plein écran">
        <DCArtboard id="A" label="A · Éditorial audacieux" width={1440} height={3720}><HomeA /></DCArtboard>
        <DCArtboard id="B" label="B · Communauté vibrante" width={1440} height={3720}><window.HomeB /></DCArtboard>
        <DCArtboard id="C" label="C · Creative Hub studio" width={1440} height={3720}><window.HomeC /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
