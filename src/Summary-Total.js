export default function SummaryTotal(props) {
  return props.USCurrencyFormat.format(Object.keys(props.state.selected).reduce(
    (acc, curr) => acc + props.state.selected[curr].cost,
    0
  ));
}