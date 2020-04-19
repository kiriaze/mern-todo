// consider https://styled-system.com/

// i can now see now why some have a basic text component and pass in props based on tag, yet they tend to keep heading as its own component - so perhaps follow that pattern and just add a Text component for `p, span, blockquote, strong, sub, sup, small, q, cite, pre` tags - whereas some other text based elements should be their own components like: ul/ol, li, dd, dt, dl; e.g.
// <Text
//  as="p"
// 	size={[ 3, 4, null, 7 ]}
// 	weight='bold'
// 	color='primary'>
// 	Text
// </Text>
// by passing an array in any prop of a component (so high order since they all use it or is that not how it works, and needs to be set up per component?) but if we follow that, then there are some other things that other frameworks do that might be nice, since the above comment touches on this as well, stylistic props; i.e. mr(margin-right) etc. `as` is optional as it defaults to `div`
