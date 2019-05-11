export default {
  input: 'src/moduleB.js',
	output: [
		{
			format: 'umd',
			extend: true,
      globals: () => "DUALEXPORT",
			name: 'DUALEXPORT',
			file: 'build/moduleB.js',
			indent: '\t'
		},
    {
      format: "es",
      file: "build/moduleB.module.js",
      indent: "\t"
    }
	]
};
