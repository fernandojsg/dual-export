export default {
  input: 'src/moduleA.js',
	output: [
		{
			format: 'umd',
			extend: true,
      globals: () => "DUALEXPORT",
			name: 'DUALEXPORT',
			file: 'build/moduleA.js',
			indent: '\t'
		},
    {
      format: "es",
      file: "build/moduleA.module.js",
      indent: "\t"
    }
	]
};
