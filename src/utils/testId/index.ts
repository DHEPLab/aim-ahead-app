const testId = (id: string, testId?: string) => ({
  id: id,
  "data-testid": testId ?? id,
});

export default testId;
