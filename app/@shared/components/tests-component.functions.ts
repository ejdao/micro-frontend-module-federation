export interface TestsComponentProperties {
  label: string;
}

export const getTestsComponent = async () => {
  const m = await import('seguridad/TestsComponentModule');

  return m.TestsComponentModule.ɵmod.exports[0];
};
