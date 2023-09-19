export const idlFactory = ({ IDL }) => {
  const Nft = IDL.Service({
    'getAsset' : IDL.Func([], [IDL.Vec(IDL.Nat8)], ['query']),
    'getCanisterId' : IDL.Func([], [IDL.Principal], ['query']),
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'getOwner' : IDL.Func([], [IDL.Principal], ['query']),
  });
  return Nft;
};
export const init = ({ IDL }) => {
  return [IDL.Text, IDL.Principal, IDL.Vec(IDL.Nat8)];
};
