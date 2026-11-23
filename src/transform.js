function normalize(row) {
  return { id: Number(row.id), name: String(row.name || "").trim() };
}
module.exports = { normalize };
